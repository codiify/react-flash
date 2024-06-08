import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Toastr } from './components/Toastr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Toastr type="default" message="This is a default message." />
      <Toastr type="success" message="Operation completed successfully!" color="red" backgroundColor="green" />
      <Toastr type="warning" message="Warning! Please take caution."/>
      <Toastr type="info" message="Here is some information." />
      <Toastr type="error" message="This is error" position="bottom-right"/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
