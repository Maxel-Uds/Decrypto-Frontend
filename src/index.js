import React from 'react';
import Axios from 'axios';
import App from './main/App';
import ReactDOM from 'react-dom/client';
import './index.css';


async function upApplication() {
  await Axios.get('https://the-encryptor.herokuapp.com/encrypt/up')
    .then(resp => {
    console.log(resp.data);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<React.StrictMode><App/></React.StrictMode>);
  })
  .catch(err => {
    alert('Algum erro ocorreu e não conseguimos acessar a aplicação!');
  });
}

upApplication();
