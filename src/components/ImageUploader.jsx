import React, { PropTypes } from 'react';

import jsfeat from 'jsfeat';

class ImageUploader extends React.Component {
  render() {
    return (
      <div>
        <label> Select File </label>
        <input id="imageLoader" type="file" onChange={ (e) => this.handleImage(e) } ref={(uploader) => { this.uploader = uploader}}/>
        <canvas ref={(canvas) => {this.canvas = canvas}}/>
      </div>
    )
  }

  handleImage(e) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      const ctx = this.canvas.getContext('2d');
      image.onload = () => {
        const width = 200;
        const height = 200;
        this.canvas.width = width;
        this.canvas.height = height;
        ctx.drawImage(image, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height);
        const grayImage = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
        const code = jsfeat.COLOR_RGBA2GRAY;
        jsfeat.imgproc.grayscale(imageData.data, width, height, grayImage, code)
        this.props.onload(grayImage);
      }
      image.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0])
  }
}
ImageUploader.props = {
  onload: PropTypes.func.isRequired
}

export default ImageUploader;
