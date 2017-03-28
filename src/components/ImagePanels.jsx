import React, { PropTypes } from 'react';

import Col from 'react-bootstrap/lib/Col';
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

    return (
      <Media>
        <Media.Left>
          <ImagePanel imageData={outputImage} threshold={curThreshold}/>
        </Media.Left>
        <Media.Body>
          <ul>
            <li> Min Threshold: {minThreshold} </li>
            <li> Max Threshold: {curThreshold} </li>
          </ul>
        </Media.Body>
      </Media>
    );
  }
}

class ImagePanels extends React.Component {
  render() {
    const imageRows = [];
    console.log(this.props.threshold);
    const maxThreshold = this.props.threshold;

    for ( let i = 0 ; i < this.props.numRows; i++) {
      const curThreshold = maxThreshold * (i + 1) / this.props.numRows;
      imageRows.push(<ImageRow key={i}
                               numCols={this.props.numCols}
                               threshold={curThreshold}
                               imageData={this.props.imageData}/>)
    }
    return (
      <div>
        <Row>
          <Col mdPush={2}>
            {imageRows}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ImagePanels;
