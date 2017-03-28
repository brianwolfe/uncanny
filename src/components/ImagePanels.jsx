import React, { PropTypes } from 'react';

import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Media from 'react-bootstrap/lib/Media';
import Row from 'react-bootstrap/lib/Row';
import ImagePanel from './ImagePanel';
import jsfeat from 'jsfeat';

class ImageRow extends React.Component {
  render() {
    const imageColumns = [];
    const curThreshold = this.props.threshold;
    const rows = this.props.imageData.rows, cols = this.props.imageData.cols;
    const outputImage = new jsfeat.matrix_t(rows, cols, jsfeat.U8_t | jsfeat.C1_t);
    const minThreshold = Math.max(curThreshold - 50, 0);

    jsfeat.imgproc.canny(this.props.imageData, outputImage, minThreshold, curThreshold);
    const caption = `Threshold: ${curThreshold}`;

    return (
      <Col md={3} xs={6}>
        <Panel footer={caption} >
          <ImagePanel imageData={outputImage} threshold={curThreshold}/>
        </Panel>
      </Col>
    );
  }
}

class ImagePanels extends React.Component {
  render() {
    const imageRows = [];
    const maxThreshold = this.props.threshold;

    for ( let i = 0 ; i < this.props.numRows; i++) {
      const curThreshold = maxThreshold * (i + 1) / this.props.numRows;
      imageRows.push(<ImageRow key={i}
                               numCols={this.props.numCols}
                               threshold={curThreshold}
                               imageData={this.props.imageData}/>)
    }
    return (
      <Row>
        <Col md={1}/>
        <Col md={10}>
          <Row>
            {imageRows}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ImagePanels;
