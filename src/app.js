import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageClipper from "./image-clipper.js"

var clipper = new ImageClipper({
  title: "Update Profile Image",
  maxFileSize: 1024 * 1024,  // 1.0 MB
  callback: uploadImage,
});

function uploadImage(blob) {
  // Do something with the image blob.
  // e.g. send an AJAX to upload the image.
  // ...

  console.log("image submitted");
}

$("#upload-image").click(function() {
  clipper.open();
});
