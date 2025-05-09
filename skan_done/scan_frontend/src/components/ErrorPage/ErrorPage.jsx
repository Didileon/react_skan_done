import { Link } from 'react-router-dom';
import './ErrorPage.css';
 
export default function ErrorPage() {
  return (
    <div className='error'>
      <div className='error__code'>
        <div className='error__span-first'>
          <span>4</span>
        </div>
        <div className='error__span-second'>
          <span>0</span>
        </div>
        <div className='error__span-third'>
          <span>4</span>
        </div>
      </div>
      <p className='error__info'>
        Здесь <span>пока</span> ничего нет <br />
        Вернитесь на <Link to='/'>главную</Link>
      </p>
    </div>
  );
}


