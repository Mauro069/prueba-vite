import { useEffect, useState } from "react";
import { getDiets, postRecipe } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css';

const Form = () => {


//____________________________________________________ Dispatch diets

    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets)



    useEffect(() => {
        dispatch(getDiets());
    },[dispatch])




//______________________________________________________ Estado local

    const [form, setForm] = useState({ // creamos un estado para poder guardar lo q ponen en los inputs   
        name:"",
        image:"",
        summary:"",
        steps: "",
        healthScore:"",
        diets:[]
    })

    const [errors, setErrors] = useState({})


//_________________________________________________________ Handler   


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]: value})

        setErrors(validate({
            ...form,
            [property]: value
        }));
    }


    const handlerSelect = (event) => {
        setForm({
            ...form,
            diets: [...form.diets, event.target.value]
        })
    };

    const handlerDelete = (el) => {
        setForm({
            ...form,
            diets: form.diets.filter( diet => diet !== el) // me devuelve el estado nuevo sin ese elemento
        })
    };



    const handlerSubmit = (event) => {
        event.preventDefault();
        // console.log(form);
        if (!form.name || !form.image || !form.summary || !form.steps || !form.healthScore) {
            alert("Completa los espacios obligatorios")
        }
        else {
            
            dispatch(postRecipe(form))
            alert("Receta creada correctamente");
            setForm({
                name:"",
                image:"",
                summary:"",
                steps: "",
                healthScore:"",
                diets:[]
            })
        }
    };

//_______________________________________________________________ Validate

    const validate = (form) => {
        let errors = {};

        if(!form.name){
            errors.name = 'Falta el Nombre';
        }

        else if(!form.image){
            errors.image = 'Falta la Imagen';
        }

        else if(!form.summary){
            errors.summary = 'Falta el Resumen';
        }

        else if(!form.healthScore){
            errors.healthScore = 'Falta el HealthScore';
        }
        
        else if(form.healthScore > 100 || form.healthScore < 0){
            errors.healthScore = 'El HealthScore tiene q ser entre 0 y 100';
        }

        else if(!form.steps){
            errors.steps = 'Falta el Paso a paso';
        }

        return errors;
    };

//___________________________________________________________ Reenderizado


      return(
        <div className={styles.bkg}>

        <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Crea tu propia Receta!</h1>
            <form className={styles.form} onSubmit={(e) => handlerSubmit(e)}>
                <div className={styles.formGroup}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={changeHandler}
                    name="name"
                    className={styles.input}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="image">Imagen URL:</label>
                <input
                    type="text"
                    id="image"
                    value={form.image}
                    onChange={changeHandler}
                    name="image"
                    className={styles.input}
                />
                {errors.image && <p className={styles.error}>{errors.image}</p>}
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="summary">Resumen:</label>
                <input
                    type="text"
                    id="summary"
                    value={form.summary}
                    onChange={changeHandler}
                    name="summary"
                    className={styles.input}
                    // maxLength="500"
                />
                {errors.summary && <p className={styles.error}>{errors.summary}</p>}
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="healthScore">HealthScore:</label>
                <input
                    type="number"
                    id="healthScore"
                    value={form.healthScore}
                    onChange={changeHandler}
                    name="healthScore"
                    className={styles.input}
                />
                {errors.healthScore && (
                    <p className={styles.error}>{errors.healthScore}</p>
                )}
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="steps">Steps:</label>
                <textarea
                    id="steps"
                    value={form.steps}
                    onChange={changeHandler}
                    name="steps"
                    className={styles.textarea}
                    // maxLength="500"
                />
                {errors.steps && <p className={styles.error}>{errors.steps}</p>}
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="diets">Dieta:</label>
                <select
                    id="diets"
                    className={styles.select}
                    onChange={handlerSelect}
                    // value={selectedDiet}
                >
                    <option value="">Selecciona una dieta</option>
                    {diets.map((diet) => (
                    <option key={diet.name} value={diet.name}>
                        {diet.name}
                    </option>
                    ))}
                </select>
                {form.diets.length > 0 && (
                    <div className={styles.selectedDiets}>
                    {form.diets.map((el) => (
                        <div key={el} className={styles.selectedDiet}>
                        <p>{el}</p>
                        <button
                            className={styles.removeDietButton}
                            onClick={() => handlerDelete(el)}
                        >
                            X
                        </button>
                        </div>
                    ))}
                    </div>
                )}
                </div>

                {errors.name || errors.summary || errors.healthScore || errors.image || errors.steps ? (
                <p className={styles.errorMessage}>Completa los espacios obligatorios</p>
                ) : (
                <button className={styles.submitButton}>Crear Receta</button>
                )}
            </form>
        </div>
        </div>
      )
  };
  

  
  export default Form;