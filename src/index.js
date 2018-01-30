import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCXbhdOeir8KKy17My_KKryOIrD9S1wIP0",
  authDomain: "fds-redux-bbs.firebaseapp.com",
  databaseURL: "https://fds-redux-bbs.firebaseio.com",
  projectId: "fds-redux-bbs",
  storageBucket: "",
  messagingSenderId: "931009029590"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
