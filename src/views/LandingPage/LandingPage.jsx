import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css';
import logo from '../../img/Logo.png';


const LandingPage = () => {
  return(
    <div className={styles.landing}>
      <div className={styles.header}>
        <img src={logo} alt="Logo de Food" className={styles.logo} />
        <h1 className={styles.welcome}>¡Bienvenidos a mi página de Food!</h1>
      </div>
      <Link to='/home' className={styles.link}>
        <button className={styles.btn}>Ingresar</button>
      </Link>
    </div>
  )
};



export default LandingPage;