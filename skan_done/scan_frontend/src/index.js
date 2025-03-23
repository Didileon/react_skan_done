import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main from './components/Main';

const routesData = [
	{ path: '/', element: <Main /> },
  ];




const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(

	<React.StrictMode>
		<BrowserRouter>

		{routesData.map((route, index) => (
              <Routes key={index} path={route.path} element={route.element} />
            ))}
                <App />
				
           
		</BrowserRouter>
	</React.StrictMode>

);

