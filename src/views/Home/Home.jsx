import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getRecipes } from "../../redux/actions";

import Filtros from "../../components/Filtros/Filtros";
import Paginado from "../../components/Paginado/Paginado";
import Card from '../../components/Card/Card';

import styles from './Home.module.css';


const Home = () => {

//__________________________________________ Ciclos de vida 

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getRecipes())
    }, [dispatch])


// //_________________________________________ Estado global

const allRecipes = useSelector((state) => state.recipes)



// // _________________________________________ Paginado

const [currentPage, setCurrentPage] = useState(1); // Estado local con la pagina actual
const recipesPerPage = 9;

const totalPages = allRecipes ?  Math.ceil(allRecipes?.length / recipesPerPage) : 0;

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber) // setea la pagina actual con el numero de pagina
};

const currentRecipes = allRecipes?.slice((currentPage - 1 ) * recipesPerPage, currentPage * recipesPerPage ) // los personajes q estan en la pagina actual (con el slice corta el array en desde el primer indice hasta el ultimo)
// console.log(currentRecipes);
// console.log(allRecipes);




    return(

        currentRecipes.length !== 0 ?  
        <div  className={styles.bkg}>
        
            <Filtros/>

        <div className={styles.cardContainer}>
            {currentRecipes.map(({id, name, image, diets, created}) => { 

                return(
                    <div key={id}>
                        <Card
                            id={id}
                            name={name}
                            image={image}
                            diets={diets}                
                        />  
                    </div>
                )

            })}
        </div>
        
            <Paginado
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />


        </div>

    :   <div className={styles.bkg1}>
            <div className={styles.loader}></div>
        </div> 
    )
}



export default Home;