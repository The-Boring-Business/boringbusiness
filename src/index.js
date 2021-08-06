import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icon from './style/Icon'
import LogIn from './components/Landing Page/subcomponents/LogIn'
import FileUpload from '../src/components/Schedule Post/subcomponents/FileUpload'
import LandingPage from './components/Landing Page/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />    
  </React.StrictMode>,
  document.getElementById('root')
);