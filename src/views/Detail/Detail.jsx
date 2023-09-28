import React from "react";
// import { Link } from 'react-router-dom';
import styles from './Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, clearDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";





const Detail = () => {

    const allRecipesDetail = useSelector((state) => state.detail);
    
    const dispatch = useDispatch();

    const {id} = useParams();


    useEffect(() => {
      dispatch(getDetail(id))
      
      return () => {
        dispatch(clearDetail());
    };
    }, [dispatch, id])



    return(
        <div className={styles.bkg}>
            <div className={styles.detailContainer}>
                {
                    allRecipesDetail.length > 0 ? 
                    <div className={styles.recipeDetail}>

                        <h2>ID: {allRecipesDetail[0].id}</h2>
                        <h1>Nombre: {allRecipesDetail[0].name}</h1>

                        <img src={allRecipesDetail[0].image} alt="Imagen de la receta" width="350px" height="250px" className={styles.recipeImage}/>

                        <div className={styles.recipeInfo}>

                            <div className={styles.infoItem}>
                                <h3>HealthScore: </h3>
                                <p>{allRecipesDetail[0].healthScore} </p>
                            </div>

                            <div className={styles.infoItem}>
                                <h3>Resumen: </h3>
                                <p>{allRecipesDetail[0].summary}</p>
                            </div>
                            
                            <div className={styles.infoItem}>
                                <h3>Steps: </h3>
                                <p>
                                    {allRecipesDetail[0].steps ? (
                                        !allRecipesDetail[0].created ? (
                                            Array.isArray(allRecipesDetail[0].steps[0]) ?
                                            allRecipesDetail[0].steps[0].map((el) => el.step + ' ') :
                                            allRecipesDetail[0].steps.map((el) => el.step + ' ')
                                        ) : (
                                            allRecipesDetail[0].steps
                                        )
                                    ) : (
                                        "Esta receta no tiene pasos"
                                    )}
                                </p>
                            </div>



                            <div>
                                <h3>Diets: </h3>
                                <p>
                                    {
                                        !allRecipesDetail[0].created ? allRecipesDetail[0].diets + (', ') : allRecipesDetail[0].diets.map(el => el.name + (', '))
                                    } 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    
                    : <div className={styles.loader}></div>
                }
            </div>
        </div>
    )
};



export default Detail;
  













// [
//     {
//         "id": 782585,
//         "name": "Cannellini Bean and Asparagus Salad with Mushrooms",
//         "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
//         "healthScore": 100,
//         "steps": [
//             [
//                 {
//                     "number": 1,
//                     "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                    
//                 },

//                 {
//                     "number": 2,
//                     "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
//                 } 
//             ]
//         ]  
//     }
// ]