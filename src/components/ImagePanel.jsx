import React, { PropTypes } from 'react';
import jsfeat from 'jsfeat';

class ImagePanel extends React.Component {
  render() {
    return (
      <div>
        <canvas ref={(r) => {this.ref = r} }/>
      </div>
    );
  }

  componentDidMount() {
    this.rerender();
  }

  componentDidUpdate() {
    this.rerender();
  }

  rerender() {
    const rawImage = this.props.imageData;

    const width = rawImage.cols;
    const height = rawImage.rows;
    this.ref.width = width;
    this.ref.height = height;
    const ctx = this.ref.getContext('2d');

    const imageData = ctx.getImageData(0, 0, width, height);
    const data_u32 = new Uint32Array(imageData.data.buffer);
    const alpha = (0xff << 24);

    let i = rawImage.cols * rawImage.rows;
    let pix = 0;
    while (--i >= 0) {
      pix = rawImage.data[i];
      data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
    }

    ctx.putImageData(imageData, 0, 0);
  }
}
ImagePanel.props = {
  imageData: PropTypes.instanceOf(jsfeat.matrix_t)
}

export default ImagePanel;
