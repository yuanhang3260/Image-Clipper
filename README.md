## Image-Clipper

An image clipper tool built with HTML5 `canvas` and BootStrap `Modal` component.

#### Example

<img src="https://raw.githubusercontent.com/yuanhang3260/Image-Clipper/master/samples/clipper.png" alt="example2" width="600px"/>

#### Usage
```javascript
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

clipper.open();
```

#### Config
`ImageClipper` constructor accepts a config which has the following attributes.

|   Attribute   |                Description                    |    Type    |
| :-----------: | --------------------------------------------- | :--------: |
| title         | If set, will be used as the dialog box title. |  string    |
| maxFileSize   | Maximun upload file size in Bytes.            |  int       |
| outputFormmat | Output image formmat ("png", "jpeg", "bmp").  |  string    |
| callback      | Callback to process image data.               |  function  |

The config `callback` takes an argument`blob`, which is a Blob object of the cropped image area. Once`submit` button is clicked, this callback will be executed. Typically this callback should make an user-defined AJAX call to backend server.

Call `clipper.open()`, and a popup dialog will show to select image file. The box title is set by the first argument of `ImmageClipper` constructor, which is "Update Profile Image" in the above example code.

<img src="https://raw.githubusercontent.com/yuanhang3260/Image-Clipper/master/samples/select.png" alt="example2" width="550px"/>

#### Preview
Crop the image and you can preview it:

<img src="https://raw.githubusercontent.com/yuanhang3260/Image-Clipper/master/samples/preview.png" alt="example3" width="550px"/>