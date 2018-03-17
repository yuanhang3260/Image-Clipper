## Image-Clipper

An image clipper tool built with HTML5 `canvas` and BootStrap `Modal` component.

Here is [demo](https://yuanhang3260.github.io/Image-Clipper/).

#### Crop Image

<img src="https://raw.githubusercontent.com/yuanhang3260/Image-Clipper/master/samples/clipper.png" alt="example2" width="600px"/>

#### Preview

<img src="https://raw.githubusercontent.com/yuanhang3260/Image-Clipper/master/samples/preview.png" alt="example3" width="600px"/>

#### Usage
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageClipper from "image-clip-tool"

var clipper = new ImageClipper({
  title: "Update Profile Image",
  maxFileSize: 1024 * 1024,  // 1.0 MB
  callback: uploadImage,
});

function uploadImage(filename, blob) {
  // Do something with the image blob.
  // e.g. send an AJAX to upload the image.
  // ...
}

clipper.open();
```

#### Config
`ImageClipper` constructor accepts a config with the following attributes.

|   Attribute   |                Description                    |    Type    |
| :-----------: | --------------------------------------------- | :--------: |
| title         | If set, will be used as the dialog box title. |  string    |
| maxFileSize   | Maximun upload file size in Bytes.            |  int       |
| outputFormmat | Output image formmat (`png`, `jpeg`, `bmp`).  |  string    |
| callback      | Callback to process image data.               |  function  |

The `callback` is of type `function(filename, blob)`, which takes filename and a Blob object of the cropped image area. Once`submit` button is clicked, this callback will be executed. Typically it should make a user-defined AJAX call to backend server:

```javascript
function uploadImage(filename, blob) {
  var formData = new FormData();
  formData.append("imagedata", blob);
  formData.append("filename", filename);

  $.ajax({
    type: "POST",
    url: "xxx",
    data: formData,
    processData: false,
    contentType: false,
  }).done(function(data) {
    // ...
  });
}
```

#### License
[MIT](https://github.com/yuanhang3260/Image-Clipper/blob/master/LICENSE)
