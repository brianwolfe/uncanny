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
      <Row>
        <Col>
          <Row>
            <Col md={1}/>
            <Col md={3}>
              <ImagePanel imageData={this.props.imageData}/>
            </Col>
            <Col md={3}>
              <label>
                Example Count
              </label>
              <Slider onChange={(v) => {this.setNumber(v)}} min={1} max={6} step={1} defaultValue={this.state.numRows}/>
            </Col>
            <Col md={3}>
              <label>
                Threshold
              </label>
              <Slider onChange={(v) => {this.setThreshold(v)}} min={1} max={255} step={1} defaultValue={this.state.threshold}/>
            </Col>
          </Row>
          <ImagePanels numRows={this.state.numRows}
                       threshold={this.state.threshold}
                       imageData={this.props.imageData}/>
        </Col>
      </Row>
    );
  }
}
ImageDisplayer.props = {
  imageData: PropTypes.string.isRequired
}

export default ImageDisplayer;
