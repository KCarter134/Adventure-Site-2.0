import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// ACTIVENET OPEN API - TRAINER: MANSFIELDTRAINER     5Z5JSJ6EQ9RMVJQ7BD4EFFT5
// ACTIVENET OPEN API - CA: TRICOCENTRE_REACH         UDKCXMSPG628JQ8CV8UXVHZB
// ACTIVENET OPEN API - US: MANSFIELD                 5C5FHV8UGG695WYGF773WWUT
// ACTIVITY SEARCH API V2                             Y2GCJH2J7MDE94SR393MDX2Q
// CAMPGROUND API                                     2TQH9CA2RVSNEWN8EBDBK2JX

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


      <BrowserRouter>
        <App />
      </BrowserRouter>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

