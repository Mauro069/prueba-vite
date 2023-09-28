// Este componenete debe mostrar la info de cada receta mapeada,
// y ademas, darnos un link para ir al detalle de la receta

import styles from './Card.module.css';
import { Link } from 'react-router-dom';


const Card = ({id, name, image, diets, created} ) => {
    // console.log(diets);

    return(
        <div>
            <div key={id} className={styles.card}>
                <Link to={`/detail/${id}`} className={styles.cardLink}>

                    <div className={styles.cardContent}>

                        <div className={styles.cardText}>

                            <h2 className={styles.cardTitle}>{name}</h2>
                            <img className={styles.cardImg} src={image} alt={name}/>
                        
                            <div className={styles.diets}>
                                
                                <h3>Diets:</h3>

                                <ul className={styles.dietList}>
                                    {diets?.map((el, index) => (
                                    <li key={index}>{el?.name || el}</li>
                                    ))}
                            
                                </ul>

                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
};


export default Card;