import React from 'react';
import {Link} from 'react-router-dom'







const Header = () => {

    return (

 
    
        <div>
            <header className='header'>
                <nav className='nav' style={{fontFamily:'italic'}}>
                

                    <ul>
                    <li className="logo1" align='left' >
                        <img src="https://sterh-school.ru/docroot/filesup/skan/PG_pHQz8deE.jpg" alt="logo"  width="141px"  />
                    </li>
                        <li className='item'><Link to='/'>Главная</Link></li>
                        <li className='item'><Link to='/components/Rate'>Тарифы</Link></li>
                        <li className='item'><Link to='/components/FAQ'>FAQ</Link></li>
                        <li className='item3'><Link to='/components/Registration'>Зарегистрироваться &nbsp;|</Link></li>
                        <li className='item1'><Link to='/auth'>Войти</Link></li>
                        
                    </ul>
                </nav>
            </header>

        </div>
    
    )
}


export default Header;