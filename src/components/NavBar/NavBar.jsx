import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../img/Logo.png';



const NavBar = () => {

    return(
        <nav className={styles.navContainer}>
            <Link className={styles.logoLink} to={'/home'} /*onClick={(e) => handlerSubmit(e)} */>
                <img src={logo} alt="Logo de Food" className={styles.logo} />
            </Link>

            <SearchBar />

            <div className={styles.navRight}>
                <Link className={styles.link} to={'/create'}>
                <button className={styles.btnCreate}>CREATE RECIPE</button>
                </Link>
            </div>
        </nav>
    )

};


export default NavBar