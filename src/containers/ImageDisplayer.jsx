import React, { PropTypes } from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ImagePanels from '../components/ImagePanels';
import ImagePanel from '../components/ImagePanel';
import Slider from 'rc-slider';

class ImageDisplayer extends React.Component {
  constructor() {
    super();

    this.state = {
      threshold: 100,
      numRows: 3,
      numCols: 3,
    };
  }

  setNumber(v) {
    this.setState({numRows: v});
  }

  setThreshold(v) {
    this.setState({threshold: v});
  }

  render() {
    return (
      <div>
        <ImagePanel imageData={this.props.imageData}/>
        <Row>
          <Col md={3}>
            <label>
              Example Count
            </label>
            <Slider onChange={(v) => {this.setNumber(v)}} min={1} max={6} step={1}/>
          </Col>
          <Col md={3}>
            <label>
              Threshold
            </label>
            <Slider onChange={(v) => {this.setThreshold(v)}} min={1} max={255} step={1}/>
          </Col>
        </Row>
        <Row>
          <Col mdPush={3}>
        <ImagePanels numRows={this.state.numRows}
                     numCols={this.state.numCols}
                     threshold={this.state.threshold}
                     imageData={this.props.imageData}/>
          </Col>
        </Row>
      </div>
    );
  }
}
ImageDisplayer.props = {
  imageData: PropTypes.string.isRequired
}

export default ImageDisplayer;
