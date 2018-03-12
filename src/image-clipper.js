import $ from "jquery";
import "bootstrap";

import "./css/image-clipper.scss";
import "./css/fonts.css";

// -------------------------------------------------------------------------- //
// ------------------------------ Dialog Box -------------------------------- //
// -------------------------------------------------------------------------- //
var $box = $(
  '<div class="modal image-clipper-box" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-hidden="true">' +
    '<div class="modal-dialog">' +
      '<div class="modal-content">' +
        '<div class="modal-header">' +
          '<h5 class="modal-title">Please Select Image</h5>' +
        '</div>' +
        '<div class="modal-body">' +
          '<div class="input-group">' +
            '<div class="custom-file">' +
              '<input type="file" class="custom-file-input file-select-input">' +
              '<label class="custom-file-label">Choose File</label>' +
            '</div>' +
          '</div>' +
          '<div class="canvas-container">' +
            '<canvas class="image-blur" width="500" height="300"></canvas>' +
            '<canvas class="image-clip" width="500" height="300"></canvas>' +
            '<canvas class="clip-container" width="500" height="300"></canvas>' +
          '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
          '<button type="button" class="btn btn-success btn-submit">Submit</button>' +
          '<button type="button" class="btn btn-secondary btn-cancel">Cancel</button>' +
          '<div class="alert alert-danger err-msg" role="alert">Invalid image formmat</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>'
);

function ImageClipper(task) {
  this.box = $box;
  this.task = task || (function() {});
  this.initialized = false;
}

ImageClipper.prototype.open = function() {
  this.box.modal("show");
  this.Init();
}

ImageClipper.prototype.Init = function() {
  if (this.initialized) {
    return;
  }

  var $title = $box.find(".modal-title");

  // Input form.
  var $form = $box.find(".input-group");
  var $input = $form.find(".file-select-input");
  var $inputLabel = $form.find(".custom-file-label");

  // Footer - buttons and err message.
  var $cancelBtn = $box.find("button.btn-cancel");
  var $submitBtn = $box.find("button.btn-submit");
  var $errMsg = $box.find("div.err-msg");

  $cancelBtn.click(function() {
    $box.modal("hide");
    resetAll();
  });

  var me = this;
  $submitBtn.click(function() {
    me.task();
    $box.modal("hide");
    resetAll();
  });

  function resetAll() {
    image = null;
    imageLoaded = false;
    drawOpts = null;

    mouseClicked = false;
    clipStartX = null;
    clipStartY = null;
    clipLength = null;
    minClipLength = null;

    $form.show();
    $canvasContainer.hide();
    $submitBtn.hide();
    $errMsg.html(null).hide();

    $title.html("Please Select Image");
    $inputLabel.html("Choose File");

    // Clear canvases
    context.clearRect(0, 0, canvas.width, canvas.height);
    contextClip.clearRect(0, 0, canvasClip.width, canvasClip.height);
    contextClipContainer.clearRect(
        0, 0, contextClipContainer.width, contextClipContainer.height);

    // Clear input value.
    $input.val(null);
  }

  // ------------------------------------------------------------------------ //
  // ------------------------ Clip Image with Canvas ------------------------ //
  // ------------------------------------------------------------------------ //
  // Canvases.
  var $canvasContainer = $box.find(".canvas-container");

  // Draw a blurred image background.
  var $canvas = $canvasContainer.find("canvas.image-blur");
  var canvas = $canvas[0];
  var context = canvas.getContext("2d");
  context.globalAlpha = 0.3;

  // Draw selected image area.
  var $canvasClip = $canvasContainer.find("canvas.image-clip");
  var canvasClip = $canvasClip[0];
  var contextClip = canvasClip.getContext("2d");

  // Clip container is a virtual container. It just shows the border of clip
  // area, rather than really "containing" clip canvas.
  var $canvasClipContainer = $("canvas.clip-container");
  var canvasClipContainer = $canvasClipContainer[0];
  var contextClipContainer = canvasClipContainer.getContext("2d");

  // Image.
  var image = null;
  var drawOpts = null;
  var imageLoaded = false;

  // Clip area.
  var mouseClicked = false;
  var clipStartX = null;
  var clipStartY = null;
  var clipLength = null;
  var minClipLength = null;
  var kCornerArrowLength = 10;

  // Load image and draw.
  $input.change(function() {
    if (!this.files) {
      return;
    }

    var file = this.files[0];
    $inputLabel.html(file.name);

    image = new Image();
    var reader = new FileReader();
    reader.onload = function() {
      var url = reader.result;
      image.src = url;
      setTimeout(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        contextClip.clearRect(0, 0, canvasClip.width, canvasClip.height);
        contextClipContainer.clearRect(
            0, 0, contextClipContainer.width, contextClipContainer.height);

        drawOpts = computeDrawOptions();

        try {
          context.drawImage(image, drawOpts.startX, drawOpts.startY,
                            drawOpts.width, drawOpts.height);
          $form.hide();
          $canvasContainer.show();
          $title.html(null)
                .append($("<span>").html("Edit Image"))
                .append($('<i class="icon-crop-hy">'));
          $errMsg.html(null).hide()
          $submitBtn.show();
        } catch(err) {
          $errMsg.html("Invalid image formmat").show();
          return;
        }

        InitClipArea();
        imageLoaded = true;
      }, 50);
    };
    reader.readAsDataURL(file);
  });

  function InitClipArea() {
    if (drawOpts.width > drawOpts.height) {
      clipLength = drawOpts.height / 1.3 - 4;
      clipStartX = drawOpts.startX + drawOpts.width / 2 - clipLength / 2;
      clipStartY = drawOpts.startY + 2;
    } else {
      clipLength = drawOpts.width / 1.3 - 4;
      clipStartX = drawOpts.startX + 2;
      clipStartY = drawOpts.startY + drawOpts.height / 2 - clipLength / 2;
    }
    minClipLength = clipLength / 3;
    drawClipImage();
    drawClipContainer();
  }

  function refreshClipArea(x, y, L) {
    if (x === clipStartX && y === clipStartY && L === clipLength) {
      return;
    }

    clipStartX = x;
    clipStartY = y;
    clipLength = L;
    drawClipImage();
    drawClipContainer();
  }

  function computeDrawOptions() {
    var ratio = image.width / image.height;
    if (canvas.width > canvas.height * ratio) {
      const width = canvas.height * ratio;
      const height = canvas.height;
      return {
        width: width,
        height: height,
        startX: (canvas.width - width) / 2,
        startY: 0,
        scale: height / image.height,
      };
    } else {
      const width = canvas.width;
      const height = canvas.width / ratio;
      return {
        width: width,
        height: height,
        startX: 0,
        startY: (canvas.height - height) / 2,
        scale: width / image.width,
      };
    }
  }

  function imageRelativePosition(element, x, y){
    var bx = x - element.offset().left;
    var by = y - element.offset().top;

    var clipX = Math.max(drawOpts.startX, bx);
    clipX = Math.min(drawOpts.startX + drawOpts.width, clipX);

    var clipY = Math.max(drawOpts.startY, by);
    clipY = Math.min(drawOpts.startY + drawOpts.height, clipY);

    return {
      x: clipX,
      y: clipY,
    };
  }

  function inClipArea(x, y) {
    return x > clipStartX && x < clipStartX + clipLength &&
           y > clipStartY && y < clipStartY + clipLength; 
  }

  function atTopLeftCorner(x, y) {
    return (clipStartX - kCornerArrowLength / 2) <= x &&
           x <= (clipStartX + kCornerArrowLength / 2) &&
           (clipStartY - kCornerArrowLength / 2) <= y &&
           y <= (clipStartY + kCornerArrowLength);
  }

  function atTopRightCorner(x, y) {
    var cornerX = clipStartX + clipLength;
    var cornerY = clipStartY;
    return (cornerX - kCornerArrowLength / 2) <= x &&
           x <= (cornerX + kCornerArrowLength / 2) &&
           (cornerY - kCornerArrowLength / 2) <= y &&
           y <= (cornerY + kCornerArrowLength);
  }

  function atBottomRightCorner(x, y) {
    var cornerX = clipStartX + clipLength;
    var cornerY = clipStartY + clipLength;
    return (cornerX - kCornerArrowLength / 2) <= x &&
           x <= (cornerX + kCornerArrowLength / 2) &&
           (cornerY - kCornerArrowLength / 2) <= y &&
           y <= (cornerY + kCornerArrowLength);
  }

  function atBottomLeftCorner(x, y) {
    var cornerX = clipStartX;
    var cornerY = clipStartY + clipLength;
    return (cornerX - kCornerArrowLength / 2) <= x &&
           x <= (cornerX + kCornerArrowLength / 2) &&
           (cornerY - kCornerArrowLength / 2) <= y &&
           y <= (cornerY + kCornerArrowLength);
  }

  const DragType = {
    TOPLEFT: "top-left",
    TOPRIGTH: "top-right",
    BOTTOMLEFT: "bottom-left",
    BOTTOMRIGTH: "bottom-right",
    MOVE: "move",
  }

  var mouseStartX = 0;
  var mouseStartY = 0;
  var drag = null;

  $canvasClipContainer.on("mousedown", function(e) {
    e.stopPropagation();
    if (!imageLoaded) {
      return;
    }

    mouseClicked = true;
    var x = mouseStartX = e.clientX - $canvasClipContainer.offset().left;
    var y = mouseStartY = e.clientY - $canvasClipContainer.offset().top;

    if (atTopLeftCorner(x, y)) {
      drag = DragType.TOPLEFT;
    } else if (atTopRightCorner(x, y)) {
      drag = DragType.TOPRIGTH;
    } else if (atBottomRightCorner(x, y)) {
      drag = DragType.BOTTOMRIGTH;
    } else if (atBottomLeftCorner(x, y)) {
      drag = DragType.BOTTOMLEFT;
    } else if (inClipArea(x, y)) {
      drag = DragType.MOVE;
    } else {
      drag = null;
    }
  });

  $canvasClipContainer.on("mousemove", mousemoveHandler);

  function mousemoveHandler(e) {
    e.stopPropagation();
    if (!imageLoaded) {
      return;
    }

    var x = e.clientX - $canvasClipContainer.offset().left;
    var y = e.clientY - $canvasClipContainer.offset().top;
    if (!mouseClicked) {
      if (atTopLeftCorner(x, y)) {
        $canvasClipContainer.css("cursor", "nw-resize");
      } else if (atTopRightCorner(x, y)) {
        $canvasClipContainer.css("cursor", "ne-resize");
      } else if (atBottomRightCorner(x, y)) {
        $canvasClipContainer.css("cursor", "se-resize");
      } else if (atBottomLeftCorner(x, y)) {
        $canvasClipContainer.css("cursor", "sw-resize");
      } else if (inClipArea(x, y)) {
        $canvasClipContainer.css("cursor", "move");
      } else {
        $canvasClipContainer.css("cursor", "default");
      }
    }

    if (mouseClicked) {
      if (drag == DragType.TOPLEFT) {
        let brX = clipStartX + clipLength;
        let brY = clipStartY + clipLength;
        let newClipLength = Math.max(minClipLength, brX - x, brY - y);
        newClipLength = Math.min(newClipLength,
                                 brX - (drawOpts.startX + 2),
                                 brY - (drawOpts.startY + 2));
        let newClipStartX = brX - newClipLength;
        let newClipStartY = brY - newClipLength;
        refreshClipArea(newClipStartX, newClipStartY, newClipLength);
      } else if (drag == DragType.BOTTOMRIGTH) {
        let newClipLength = Math.max(minClipLength,
                                     x - clipStartX, y - clipStartY);
        newClipLength = Math.min(
            newClipLength,
            drawOpts.startX + drawOpts.width - 2 - clipStartX,
            drawOpts.startY + drawOpts.height - 2 - clipStartY);
        refreshClipArea(clipStartX, clipStartY, newClipLength);
      } else if (drag == DragType.TOPRIGTH) {
        // Bottom left is fixed point.
        let blX = clipStartX;
        let blY = clipStartY + clipLength;
        let newClipLength = Math.max(minClipLength, x - blX, blY - y);
        newClipLength = Math.min(newClipLength,
                                 drawOpts.startX + drawOpts.width - 2 - blX,
                                 blY - (drawOpts.startY + 2));
        let newClipStartY = blY - newClipLength;
        refreshClipArea(clipStartX, newClipStartY, newClipLength);
      } else if (drag == DragType.BOTTOMLEFT) {
        // Top right is fixed point.
        let trX = clipStartX + clipLength;
        let trY = clipStartY;
        let newClipLength = Math.max(minClipLength, trX - x, y - trY);
        newClipLength = Math.min(newClipLength,
                                 trX - (drawOpts.startX + 2),
                                 drawOpts.startY + drawOpts.height - 2 - trY);
        let newClipStartX = trX - newClipLength;
        refreshClipArea(newClipStartX, clipStartY, newClipLength);
      } else if (drag == DragType.MOVE) {
        let newClipStartX = clipStartX + (x - mouseStartX);
        newClipStartX = Math.max(newClipStartX, (drawOpts.startX + 2));
        newClipStartX = Math.min(
            newClipStartX, drawOpts.startX + drawOpts.width - 2 - clipLength);

        let newClipStartY = clipStartY + (y - mouseStartY);
        newClipStartY = Math.max(newClipStartY, (drawOpts.startY + 2));
        newClipStartY = Math.min(
            newClipStartY, drawOpts.startY + drawOpts.height - 2 - clipLength);
        refreshClipArea(newClipStartX, newClipStartY, clipLength);
      }
      mouseStartX = x;
      mouseStartY = y;
    }
  }

  function mouseupHandler(e) {
    e.stopPropagation();
    mouseClicked = false;
  }

  $canvasClipContainer.on("mouseup", mouseupHandler);

  // Mouse event from outside box to canvas.
  $box.on("mouseup", function(e) {
    mouseupHandler(e);
  });

  $box.on("mousemove", function(e) {
    if (!mouseClicked) {
      return;
    }
    mousemoveHandler(e);
  });

  $box.on("keydown", function(e) {
    // Esc
    if (e.keyCode == 27)  {
      $box.modal("hide");
      resetAll();
    }
  });

  // Drawing functions.
  function drawClipImage() {
    var imageStartX = (clipStartX - drawOpts.startX) / drawOpts.scale;
    var imageStartY = (clipStartY - drawOpts.startY) / drawOpts.scale;
    var imageCutLength = clipLength / drawOpts.scale;

    contextClip.clearRect(0, 0, canvasClip.width, canvasClip.height); 
    contextClip.drawImage(image, imageStartX, imageStartY,
                          imageCutLength, imageCutLength,
                          clipStartX, clipStartY,
                          clipLength, clipLength);
  }

  function drawClipContainer() {
    contextClipContainer.clearRect(
        0, 0, canvasClipContainer.width, canvasClipContainer.height);
    contextClipContainer.lineWidth = 3;

    var diagnal = getClipDiagnoal();

    contextClipContainer.beginPath();
    contextClipContainer.moveTo(diagnal.x1 + kCornerArrowLength, diagnal.y1);
    contextClipContainer.lineTo(diagnal.x1, diagnal.y1);
    contextClipContainer.lineTo(diagnal.x1, diagnal.y1 + kCornerArrowLength);
    contextClipContainer.stroke();

    contextClipContainer.beginPath();
    contextClipContainer.moveTo(diagnal.x2 - kCornerArrowLength, diagnal.y1);
    contextClipContainer.lineTo(diagnal.x2, diagnal.y1);
    contextClipContainer.lineTo(diagnal.x2, diagnal.y1 + kCornerArrowLength);
    contextClipContainer.stroke();

    contextClipContainer.beginPath();
    contextClipContainer.moveTo(diagnal.x2 - kCornerArrowLength, diagnal.y2);
    contextClipContainer.lineTo(diagnal.x2, diagnal.y2);
    contextClipContainer.lineTo(diagnal.x2, diagnal.y2 - kCornerArrowLength);
    contextClipContainer.stroke();

    contextClipContainer.beginPath();
    contextClipContainer.moveTo(diagnal.x1 + kCornerArrowLength, diagnal.y2);
    contextClipContainer.lineTo(diagnal.x1, diagnal.y2);
    contextClipContainer.lineTo(diagnal.x1, diagnal.y2 - kCornerArrowLength);
    contextClipContainer.stroke();
  }

  // Get the diagnal of clip area from top-left to bottom-right.
  function getClipDiagnoal() {
    var x1 = clipStartX;
    var x2 = x1 + clipLength;

    var y1 = clipStartY;
    var y2 = y1 + clipLength;

    return {
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2,
    }
  }

  function printPoint(x, y, msg) {
    console.log((msg || "Point") + ": " + x + "," + y);
  }

  this.initialized = true;

}

export default ImageClipper;
