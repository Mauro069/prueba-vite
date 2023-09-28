import React, { useState } from "react";
import styles from './SearchBar.module.css';
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handlerInput = (event) => {
    event.preventDefault();
    const inputName = event.target.value;
    // setName(inputName);

    // Limpiamos el timeout anterior para evitar múltiples solicitudes
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Configuramos un nuevo timeout para realizar la búsqueda después de un pequeño retraso (500 ms en este ejemplo)
    const newTimeout = setTimeout(() => {
      dispatch(getNameRecipes(inputName));
    }, 200);

    setTypingTimeout(newTimeout);
  };

  return (
    <div className={styles.containerSerach}>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handlerInput}
        className={styles.searchInput}
      />

      <button
        type="submit"
        className={styles.searchButton}
        onClick={(e) => e.preventDefault()}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
