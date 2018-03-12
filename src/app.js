import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageClipper from "./image-clipper.js"

var clipper = new ImageClipper(function(data) {
  console.log("image submitted");
});

$("#upload-image").click(function() {
  clipper.open();
});
