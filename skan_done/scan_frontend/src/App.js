import React from 'react';
import {Route, Routes } from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Authorization from './components/Authorization/Authorization';

 



function App() {

	return (
	        <>

            <div className='App'>
                <div>
                    <Header />



                    <Routes>
                        <Route exact path='/' element={<Main />} />
                        <Route path='/components/Registration' element={<ErrorPage />} />
                        <Route path='auth' element={<Authorization />} />
                        <Route path='/components/FAQ' element={<ErrorPage />} />
                        <Route path='/components/Rate' element={<ErrorPage />} />
                    </Routes>
                </div>


                        <Footer />
                </div>
            </>


	)
}


export default App;
