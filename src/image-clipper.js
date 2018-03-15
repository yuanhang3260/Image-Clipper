import $ from "jquery";
import "bootstrap";
import b64ToBlob from "b64-to-blob"

import "./css/image-clipper.scss";
import "./css/fonts.css";

// -------------------------------------------------------------------------- //
// ------------------------------ Dialog Box -------------------------------- //
// -------------------------------------------------------------------------- //
var $box = $(
  '<div class="modal image-clipper-box-hy" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-hidden="true">' +
    '<div class="modal-dialog">' +
      '<div class="modal-content">' +
        '<div class="modal-header">' +
          '<h5 class="modal-title select-page-title"></h5>' +
          '<div class="edit-page-title-container">' +
            '<h5 class="modal-title edit-page-title crop-tab crop-tab-selected">' +
              '<span>Crop</span>' +
              '<i class="icon-crop-hy"></i>' +
            '</h5>' +
            '<h5 class="modal-title edit-page-title preview-tab">' +
              '<span>Preview</span>' +
              '<i class="icon-camera-hy"></i>' +
            '</h5>' +
          '</div>' +
        '</div>' +
        '<div class="modal-body">' +
          '<div class="select-file">' +
            '<label class="custom-file">' +
              '<div class="label-content-container">' +
                '<i class="icon-upload2-hy"></i>' +
                '<span class="label-text">Upload Image</span>' +
              '</div>' +
              '<input type="file" class="file-select-input">' +
            '</label>' +
          '</div>' +
          '<div class="canvas-container">' +
            '<canvas class="image-blur" width="500" height="300"></canvas>' +
            '<canvas class="image-clip" width="500" height="300"></canvas>' +
          '</div>' +
          '<div class="preview-container">' +
            '<div class="preview-container-inner">' +
              '<div class="square-preview">' +
                '<canvas class="preview-canvas preview-canvas-square" width="165" height="165"></canvas>' +
              '</div>' +
              '<div class="circle-preview">' +
                '<canvas class="preview-canvas preview-canvas-circle" width="165" height="165"></canvas>' +
              '</div>' +
            '</div>' +    
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

function ImageClipper(config) {
  this.title = config.title || "Please Select Image";
  this.maxFileSize = config.maxFileSize || (5 * 1024 * 1024);  // 5MB
  if (isValidOutputFormmat(config.outputFormmat)) {
    this.outputFormmat = config.outputFormmat;
  } else {
    this.outputFormmat = "png";
  }
  this.task = config.callback || (function() {});

  this.box = $box;
  this.initialized = false;
}

ImageClipper.prototype.open = function() {
  this.box.modal("show");

  if (!this.initialized) {
    this.Init();
    this.initialized = true;
  }
}

ImageClipper.prototype.Init = function() {
  var $selectPageTitle = $box.find(".select-page-title");
  $selectPageTitle.html(this.title || "Please Select Image");
  var $editPageTitle = $box.find(".edit-page-title-container");

  // Input form.
  var $form = $box.find(".select-file");
  var $input = $form.find(".file-select-input");
  var $inputLabel = $form.find(".label-context");

  // Footer - buttons and err message.
  var $cancelBtn = $box.find("button.btn-cancel");
  var $submitBtn = $box.find("button.btn-submit");
  var $errMsg = $box.find("div.err-msg");

  var me = this;

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
    $cropTab.addClass("crop-tab-selected");
    $canvasContainer.hide();
    $previewTab.removeClass("preview-tab-selected");
    $previewContainer.hide();
    $submitBtn.hide();
    $errMsg.html(null).hide();

    $editPageTitle.hide();
    $selectPageTitle.show();
    $inputLabel.html("Choose File");

    // Clear canvases
    context.clearRect(0, 0, canvas.width, canvas.height);
    contextClip.clearRect(0, 0, canvasClip.width, canvasClip.height);

    // Clear input value.
    $input.val(null);
  }

  $cancelBtn.click(function() {
    $box.modal("hide");
    resetAll();
  });

  $submitBtn.click(function() {
    var imageStartX = (clipStartX - drawOpts.startX) / drawOpts.scale;
    var imageStartY = (clipStartY - drawOpts.startY) / drawOpts.scale;
    var imageCutLength = clipLength / drawOpts.scale;

    var canvas = document.createElement("canvas");
    canvas.width = imageCutLength;
    canvas.height = imageCutLength;
    var ctx = canvas.getContext("2d");

    // We draw from original image to this canvas. 
    ctx.drawImage(image, imageStartX, imageStartY,
                  imageCutLength, imageCutLength,
                  0, 0, imageCutLength, imageCutLength);

    var data = canvas.toDataURL("image/" + me.outputFormmat);
    // Convert base64 data to bytes.
    var blob = b64ToBlob(data.split(",")[1], "image/" + me.outputFormmat);
    me.task($input.val(), blob);

    $box.modal("hide");
    resetAll();
  });

  // ---------------------------------------------------------------------- //
  // ------------------------ Clip Image with Canvas ---------------------- //
  // ---------------------------------------------------------------------- //
  // Crop Tab.
  var $cropTab = $box.find(".crop-tab");
  var $canvasContainer = $box.find(".canvas-container");
  $cropTab.click(function() {
    $cropTab.addClass("crop-tab-selected");
    $canvasContainer.show();
    $previewTab.removeClass("preview-tab-selected");
    $previewContainer.hide();
  });

  // Draw a blurred image background.
  var $canvas = $canvasContainer.find("canvas.image-blur");
  var canvas = $canvas[0];
  var context = canvas.getContext("2d");
  context.globalAlpha = 0.3;

  // Draw selected image area.
  var $canvasClip = $canvasContainer.find("canvas.image-clip");
  var canvasClip = $canvasClip[0];
  var contextClip = canvasClip.getContext("2d");

  // Preview Tab
  var $previewTab = $box.find(".preview-tab");
  var $previewContainer = $box.find(".preview-container");
  $previewTab.click(function() {
    $previewTab.addClass("preview-tab-selected");
    $previewContainer.show();
    $cropTab.removeClass("crop-tab-selected");
    $canvasContainer.hide();
    drawPreviews();
  });

  // Square preview
  var $canvasSqurePreivew = $("canvas.preview-canvas-square");
  var canvasSqurePreivew = $canvasSqurePreivew[0];
  var contextSqurePreivew = canvasSqurePreivew.getContext("2d");

  // Square preview
  var $circleSqurePreivew = $("canvas.preview-canvas-circle");
  var circleSqurePreivew = $circleSqurePreivew[0];
  var contextCirclePreivew = circleSqurePreivew.getContext("2d");

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
    if (file.size > me.maxFileSize) {
      $errMsg.html(
          "File size over limit " + friendlyFileSize(me.maxFileSize)).show();
      return;
    }

    $inputLabel.html(file.name);

    image = new Image();
    var reader = new FileReader();
    reader.onload = function() {
      var url = reader.result;
      image.src = url;
      setTimeout(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        contextClip.clearRect(0, 0, canvasClip.width, canvasClip.height);

        drawOpts = computeDrawOptions();

        try {
          context.drawImage(image, drawOpts.startX, drawOpts.startY,
                            drawOpts.width, drawOpts.height);
          $form.hide();
          $canvasContainer.show();
          $selectPageTitle.hide();
          $editPageTitle.show();
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
  }

  function refreshClipArea(x, y, L) {
    if (x === clipStartX && y === clipStartY && L === clipLength) {
      return;
    }

    clipStartX = x;
    clipStartY = y;
    clipLength = L;
    drawClipImage();
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

  $canvasClip.on("mousedown", function(e) {
    e.stopPropagation();
    if (!imageLoaded) {
      return;
    }

    mouseClicked = true;
    var x = mouseStartX = e.clientX - $canvasClip.offset().left;
    var y = mouseStartY = e.clientY - $canvasClip.offset().top;

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

  $canvasClip.on("mousemove", mousemoveHandler);

  function mousemoveHandler(e) {
    e.stopPropagation();
    if (!imageLoaded) {
      return;
    }

    var x = e.clientX - $canvasClip.offset().left;
    var y = e.clientY - $canvasClip.offset().top;
    if (!mouseClicked) {
      if (atTopLeftCorner(x, y)) {
        $canvasClip.css("cursor", "nw-resize");
      } else if (atTopRightCorner(x, y)) {
        $canvasClip.css("cursor", "ne-resize");
      } else if (atBottomRightCorner(x, y)) {
        $canvasClip.css("cursor", "se-resize");
      } else if (atBottomLeftCorner(x, y)) {
        $canvasClip.css("cursor", "sw-resize");
      } else if (inClipArea(x, y)) {
        $canvasClip.css("cursor", "move");
      } else {
        $canvasClip.css("cursor", "default");
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

  $canvasClip.on("mouseup", mouseupHandler);

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

    drawClipContainer();
  }

  function drawClipContainer() {
    contextClip.lineWidth = 3;

    var diagnal = getClipDiagnoal();

    contextClip.beginPath();
    contextClip.moveTo(diagnal.x1 + kCornerArrowLength, diagnal.y1);
    contextClip.lineTo(diagnal.x1, diagnal.y1);
    contextClip.lineTo(diagnal.x1, diagnal.y1 + kCornerArrowLength);
    contextClip.stroke();

    contextClip.beginPath();
    contextClip.moveTo(diagnal.x2 - kCornerArrowLength, diagnal.y1);
    contextClip.lineTo(diagnal.x2, diagnal.y1);
    contextClip.lineTo(diagnal.x2, diagnal.y1 + kCornerArrowLength);
    contextClip.stroke();

    contextClip.beginPath();
    contextClip.moveTo(diagnal.x2 - kCornerArrowLength, diagnal.y2);
    contextClip.lineTo(diagnal.x2, diagnal.y2);
    contextClip.lineTo(diagnal.x2, diagnal.y2 - kCornerArrowLength);
    contextClip.stroke();

    contextClip.beginPath();
    contextClip.moveTo(diagnal.x1 + kCornerArrowLength, diagnal.y2);
    contextClip.lineTo(diagnal.x1, diagnal.y2);
    contextClip.lineTo(diagnal.x1, diagnal.y2 - kCornerArrowLength);
    contextClip.stroke();
  }

  var kPreviePadding = 6;
  function drawPreviews() {
    var imageStartX = (clipStartX - drawOpts.startX) / drawOpts.scale;
    var imageStartY = (clipStartY - drawOpts.startY) / drawOpts.scale;
    var imageCutLength = clipLength / drawOpts.scale;

    var previewSize = canvasSqurePreivew.width;

    // Draw square preview.
    contextSqurePreivew.clearRect(0, 0, previewSize, previewSize);
    contextSqurePreivew.lineWidth = 3;
    contextSqurePreivew.strokeStyle = "#ccc";
    contextSqurePreivew.strokeRect(0, 0, previewSize, previewSize);
    contextSqurePreivew.drawImage(image, imageStartX, imageStartY,
                                  imageCutLength, imageCutLength,
                                  kPreviePadding, kPreviePadding,
                                  previewSize - 2 * kPreviePadding,
                                  previewSize - 2 * kPreviePadding);

    // Draw circle preview.
    var padding = kPreviePadding - 1;
    contextCirclePreivew.clearRect(0, 0, previewSize, previewSize);
    contextCirclePreivew.beginPath();
    contextCirclePreivew.arc(previewSize / 2, previewSize / 2,
                             previewSize / 2 - 1, 0, 2 * Math.PI);
    contextCirclePreivew.lineWidth = 1.5;
    contextCirclePreivew.strokeStyle = "#c7c7c7";
    contextCirclePreivew.stroke();

    contextCirclePreivew.beginPath();
    contextCirclePreivew.arc(previewSize / 2, previewSize / 2,
                             previewSize / 2 - 1 - padding, 0, 2 * Math.PI);
    contextCirclePreivew.lineWidth = 0;
    contextCirclePreivew.strokeStyle = "white";
    contextCirclePreivew.clip();    
    contextCirclePreivew.drawImage(image, imageStartX, imageStartY,
                                   imageCutLength, imageCutLength,
                                   padding, padding,
                                   previewSize - 2 * padding,
                                   previewSize - 2 * padding);
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

  function friendlyFileSize(byteSize) {
    if (byteSize < 1024) {
      return byteSize + " B";
    } else if (byteSize < 1048576) {
      return (byteSize / 1024).toFixed(1) + " KB";
    } else {
      return (byteSize / 1048576).toFixed(1) + " MB";
    }
  }

}

function isValidOutputFormmat(formmat) {
  return formmat === "png" || formmat === "jpeg" || formmat === "bmp";
}

export default ImageClipper;
