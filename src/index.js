import React from 'react';
import App from './routes/App';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  />);


// ReactDOM.render(<App />, document.getElementById('app'));
