import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <HelmetProvider>
    <App />
  </HelmetProvider>
)
