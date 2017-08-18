import React from 'react';
import ReactDOM from 'react-dom';
import Layouts from './Components/Layouts/Layouts';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layouts />, document.getElementById('root'));

registerServiceWorker();
