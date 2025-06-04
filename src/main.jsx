import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import "../src/assets/scss/index.scss";
import {CounterContext} from './utils/MainContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContext>
      <App />
    </CounterContext>

  </StrictMode>,
)
