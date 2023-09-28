import React from "react";
import styles from './Paginado.module.css'



const Paginado = ({currentPage, totalPages, onPageChange}) => {

    const maxDisplayedPages = 5;
    const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2);

    let startPage, endPage;

    if (totalPages <= maxDisplayedPages) {
        startPage = 1;
        endPage = totalPages;
    } else if (currentPage <= halfMaxDisplayedPages) {
        startPage = 1;
        endPage = maxDisplayedPages;
    } else if (currentPage + halfMaxDisplayedPages >= totalPages) {
        startPage = totalPages - maxDisplayedPages + 1;
        endPage = totalPages;
    } else {
        startPage = currentPage - halfMaxDisplayedPages;
        endPage = currentPage + halfMaxDisplayedPages;
    }

    const pageRange = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    
    
    
    return (
        <div className={styles.paginado}>
          {currentPage > 1 && (
            <button className= {styles.prev} onClick={() => onPageChange(currentPage - 1)}>
              Prev
            </button>
          )}
    
          {pageRange.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`${pageNumber === currentPage ? styles.active : ''}`} 
            >
              {pageNumber}
            </button>
          ))}
    
          {currentPage < totalPages && (
            <button className={styles.next} onClick={() => onPageChange(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
    );
    
    
    
    
    
    
    
    
    
    
    
    
    // const pageNumber = []; // va a ser el numerito de cada pagina

    // for (let i= 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) { // redondea todos las recipes dividido la cant de recipes por pagina
     
    //     pageNumber.push(i); 

    // }

    // return(
    //     <nav>
    //         <ul className={styles.paginado}>
    //             {
    //                 pageNumber && pageNumber.map(number =>(
    //                     <li onClick={() => paginado(number)} className={styles.number} key={number}>
    //                         <a >{number}</a> {/*  muestre cada uno de los numeritos del paginado */}
    //                     </li>
    //                 ))
    //             }
    //         </ul>
    //     </nav>
    // )
};


export default Paginado;