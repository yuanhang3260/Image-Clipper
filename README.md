## Image-Clipper

An image clipper tool built with HTML5 `canvas` and BootStrap `Modal` component.

#### Example

<img src="https://raw.githubusercontent.com/yuanhang3260/Image-Clipper/master/samples/clipper.png" alt="example2" width="600px"/>

#### Usage
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageClipper from "./image-clipper.js"

var clipper = new ImageClipper(function(data) {
  // Do something with the image data.
  // e.g. send an AJAX to server.
  // ...

  console.log("image submitted");
});

clipper.open();
```
`ImageClipper` constructor should be passed in a callback which takes an argument`data`, which is the png formmat data of the selected image area. Once`submit` button is clicked, this callback will be executed. Typically this callback should make an user-defined AJAX call to backend server.

Call `clipper.open()`, and a popup dialog will show to select image file.

<img src="https://raw.githubusercontent.com/yuanhang3260/Image-Clipper/master/samples/select.png" alt="example2" width="550px"/>