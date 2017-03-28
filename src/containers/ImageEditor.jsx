import React, { PropTypes } from 'react';

import ImageUploader from '../components/ImageUploader';
import ImageDisplayer from './ImageDisplayer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ImageEditor extends React.Component {
  constructor() {
    super();

    this.state = {
      rawImage: null,
    };
  }

  onImageLoad(imageData) {
    this.setState({rawImage: imageData});
  }

  render() {
    if ( this.state.rawImage ) {
      return (
        <ImageDisplayer imageData={this.state.rawImage}/>
      );
    } else {
      return (
        <ImageUploader onload={(data) => this.onImageLoad(data)}/>
      );
    }
  }
}

export default ImageEditor;
