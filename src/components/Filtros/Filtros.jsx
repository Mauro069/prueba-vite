import { filterCreated, filterRecipesByDiets, ordenByName } from "../../redux/actions";
import { getDiets } from "../../redux/actions";
import styles from './Filtros.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Filtros = () => {



    const dispatch = useDispatch();

//____________________________________________________ Dispatch diets

    const diets = useSelector((state) => state.diets)


    useEffect(() => {
        dispatch(getDiets());
    },[dispatch])


//_________________________________________________ Estado local

const [dietFilter, setDietFilter] = useState("All");
// const [order, setOrder] = useState('A'); 



//________________________________________________ Handler

    const handleFilterCreated = (event) => {
        dispatch(filterCreated(event.target.value)) // toma como payload el value de cada input q seleccione el usuario
    };


    const handlerFilterDiets = (event) => {
        setDietFilter(event.target.value)
        dispatch(filterRecipesByDiets(event.target.value))
    };


    const handlerOrderName = (event) => {
        const selectedOrder = event.target.value;
        // setOrder(selectedOrder);

        if (selectedOrder === "A") {
            // Ordenar de A a Z
            dispatch(ordenByName("A"));
        } else if (selectedOrder === "D") {
            // Ordenar de Z a A
            dispatch(ordenByName("D"));
        } 
    };





//_________________________________________________ Reenderizado

    return(
        <div id="filtros" className={styles.filterC}>
           
           <select onChange={handlerOrderName} className={styles.select}> Alfabetico
                <option value="O">Orden por nombre</option>
                <option value="A">A-Z</option>  
                <option value="D">Z-A</option>
            </select>

            {/* <select onChange={handlerOrderName} className={styles.select}> HealtScore */}
                {/* <option value="A">Ascendente</option> */}
                {/* <option value="D">Decendente</option> */}
            {/* </select> */}

            <select className={styles.select} onChange={handleFilterCreated}> {/* Creado o de la api */}
                <option className={styles.option} value="All">Todos</option>
                <option value="created">Creados</option>
                <option value="Api">Existentes</option>
            </select>

            <select className={styles.select} value={dietFilter} onChange={handlerFilterDiets}>
            <option value="All">Todas las recetas</option>
                {
                    diets.map((diet) => (
                        <option value={diet.name} key={diet.name}>{diet.name}</option>
                    ))
                }
            </select>

        </div>
    )
};

export default Filtros;