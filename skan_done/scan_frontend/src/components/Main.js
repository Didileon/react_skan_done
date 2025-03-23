import React from 'react';
import Search from './Search';
import ButtonClick from './ButtonClick';
import Carousel from './Carousel';



function Main() {

    return (
        <div>

<div className="container-main">
<div className="service" align='left'><h1>сервис по поиску
                            <p>публикаций</p>
                            <p>о компании</p>
                            <p>по его ИНН</p></h1>

<p className='baseText' align='left' style={{fontWeight:'normal'}}>Комплексный анализ публикаций, получение данных</p>
 <p style={{fontWeight:'normal'}}>в формате PDF на электронную почту.</p>

  <div className='search' align="left" >

        <Search />

    </div>
  </div>
 </div>

<div className='jpg'  align='right'>
        <img src="https://sterh-school.ru/docroot/filesup/skan/bcqhF0NgRCI.jpg" alt="background" width="629px" />


        </div>

<div className="text1" align='left' style={{fontWeight:'bold'}}><h2>Почему именно мы</h2>
</div>





<div className='carousel'>
< Carousel />
</div>





<div className="jpg5">
<img src="https://sterh-school.ru/docroot/filesup/skan/alEvjYL08yM.jpg" alt="jpg5" width="1307px" />
</div>




<div className="tarif" align='left' style={{fontWeight:'bold'}}>


<h2>наши тарифы</h2>


<div className='container'>
<div class="solid1">
<div className="orange" style={{fontFamily:'italic'}}>
<div className="jpg2"><img src="https://sterh-school.ru/docroot/filesup/skan/gr3.png" alt="jpg7" width="165px" align="right" />
</div>

<p align="left" style={{paddingLeft: '20px', fontFamily:'italic'}}><h1>Beginner</h1> <br />&nbsp;&nbsp;Для небольшого &nbsp;&nbsp;исследования</p>
</div>

<p style={{paddingLeft: '20px', fontFamily:'italic', paddingTop: '20px'}}><h1>799 ₽   &nbsp; <strike className="price1" style={{fontFamily:'italic'}}>1 200 ₽</strike></h1></p>

<p style={{paddingLeft: '20px', paddingTop: '20px', fontFamily:'italic'}}>или 150 ₽/мес. при рассрочке на 24 мес</p>

<p style={{paddingLeft: '20px', fontFamily:'italic'}}>В тариф входит:
    <ul>
        <li className="item4">&nbsp;<img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" /> Безлимитная история запросов</li>
        <li className="item4">&nbsp;<img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" /> Безопасная сделка</li>
        <li className="item4">&nbsp;<img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" /> Поддержка 24/7</li>
    </ul>
</p>
<div className='mybutton' align='center'>
 <ButtonClick />
</div>
</div>

<div class="dashed1"  style={{fontFamily:'italic'}}>
<div className="blue">
<div className="jpg2"><img src="https://sterh-school.ru/docroot/filesup/skan/gr1.png" alt="jpg8" width="165px" align="right" />
</div>

<p align="left" style={{paddingLeft: '20px'}}><h1>Pro</h1> <br />&nbsp;&nbsp;Для HR и фрилансеров</p>
</div>

<p style={{paddingLeft: '20px', paddingTop: '20px'}}><h1>1 299 ₽  &nbsp; <strike className="price2">  2 600 ₽</strike></h1></p>

<p style={{paddingLeft: '20px', paddingTop: '20px'}}>или 279 ₽/мес. при рассрочке на 24 мес</p>

<p style={{paddingLeft: '20px'}}>В тариф входит:
    <ul>
        <li className="item4"><img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" />Все пункты тарифа Beginner</li>
        <li className="item4"><img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" />Экспорт истории</li>
        <li className="item4"><img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" />Рекомендации по приоритетам</li>
    </ul>
</p>
<div className='mybutton' align='center'>
 <ButtonClick />
</div>
</div>

<div class="double1" style={{fontFamily:'italic'}}>
<div className="black">
<div className="jpg2"><img src="https://sterh-school.ru/docroot/filesup/skan/gr2.png" alt="jpg9" width="165px" align="right" />
</div>

<p align="left" style={{paddingLeft: '20px'}}><h1>Business</h1> <br />&nbsp;&nbsp;Для корпоративных &nbsp;&nbsp;клиентов</p>
</div>

<p style={{paddingLeft: '20px', paddingTop: '20px'}}><h1>2 379 ₽  &nbsp; <strike className="price3"> 3 700 ₽</strike></h1></p>

<p style={{paddingLeft: '20px', paddingTop: '20px'}}>или 279 ₽/мес. при рассрочке на 24 мес</p>

<p style={{paddingLeft: '20px'}}>В тариф входит:
    <ul>
        <li className="item4"><img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" />Все пункты тарифа Pro</li>
        <li className="item4"><img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" />Безлимитное количество запросов</li>
        <li className="item4"><img src="https://sterh-school.ru/docroot/filesup/skan/7Ub6Gwq5ANs.jpg" alt="jpg10" width="20px" align="left" />Приоритетная поддержка</li>
    </ul>
</p>
<div className='mybutton' align='center'>
<ButtonClick />

</div>
</div>
</div>

</div>

</div>
)
}

export default Main;