
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ImageEditor from './containers/ImageEditor';

ReactDOM.render(
  (
    <div>
      <Header/>
      <ImageEditor/>
    </div>
  ),
  document.getElementById("app"));
