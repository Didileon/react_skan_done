import React from 'react';
import Slider from 'react-slick';

import './CustomArrows.css'; // Custom styles for arrows

const CustomPrevArrow = props => (
    <button
        className='custom-arrow custom-prev'
        style={{
            background: 'white',
            border: 'none',
            position: 'absolute',
            left: '-40px',
            top:"50%",
            transform: "translateY(-50%)"
        }}
        onClick={props.onClick}
    >
        <img
            src='https://sterh-school.ru/docroot/filesup/skan/icons8right90%201.png'
            alt='Previous'
        />
    </button>
);

const CustomNextArrow = props => (
    <button
        className='custom-arrow custom-next'
        style={{
            background: 'white',
            border: 'none',
            position: 'absolute',
            right:"0px",
            top: '50%',
            transform: 'translateY(-50%)',
        }}
        onClick={props.onClick}
    >
        <img
            src='https://sterh-school.ru/docroot/filesup/skan/iconsleft90%201.png'
            alt='Next'
        />
    </button>
);

const settings = {
    arrows: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
};



const Carousel = () => {


  return (
 <div className="slider-container" style={{fontStyle:'Arial'}} >
    <Slider {...settings}>

        <div>
            <div class="solid2">
                <div className="jpg2" align="left"><img src="https://sterh-school.ru/docroot/filesup/skan/vwTGJKg5nqw.jpg" alt="jpg2" width="65px" />
                </div>

                <p align="left">Высокая и оперативная скорость <br />обработки заявки</p>

            </div>
        </div>
        <div>
            <div class="dashed2">
                <div className="jpg3" align="left"><img src="https://sterh-school.ru/docroot/filesup/skan/wjrh9AHXbrg.jpg" alt="jpg3" width="65px" />
            </div>

                <p align="left">Огромная комплексная база данных,<br /> обеспечивающая объективный ответ на запрос</p>

            </div>
        </div>

        <div>
            <div class="double2">
                <div className="jpg4" align="left"><img src="https://sterh-school.ru/docroot/filesup/skan/QFwfQ8FMU1c.jpg" alt="jpg4" width="65px" />
                </div>

            <p align="left">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>

            </div>
        </div>

        <div>
            <div class="solid2">
                <div className="jpg2" align="left"><img src="https://sterh-school.ru/docroot/filesup/skan/vwTGJKg5nqw.jpg" alt="jpg2" width="65px" />
                </div>

                <p align="left">Высокая и оперативная скорость <br />обработки заявки</p>

            </div>
        </div>

        <div>
            <div class="dashed2">
                <div className="jpg3" align="left"><img src="https://sterh-school.ru/docroot/filesup/skan/wjrh9AHXbrg.jpg" alt="jpg3" width="65px" />
                </div>

            <p align="left">Огромная комплексная база данных,<br /> обеспечивающая объективный ответ на запрос</p>

            </div>

        </div>

      </Slider>

</div>
  );
};

export default Carousel;


