import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageClipper from "./image-clipper.js"

var clipper = new ImageClipper("Update Profile Image", callback);

function callback(blob) {
  // Do something with the image blob.
  // e.g. send an AJAX to upload the image.
  // ...

  console.log("image submitted");
}

$("#upload-image").click(function() {
  clipper.open();
});
