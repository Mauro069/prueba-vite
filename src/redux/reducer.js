import { 
            GET_RECIPES,
            GET_NAME_RECIPES, 
            GET_DIETS, 
            GET_DETAIL,
            CLEAR_DETAIL, 
            POST_RECIPE, 
            FILTER_CREATED, 
            FILTER_RECIPES_BY_DIETS, 
            ORDEN_BY_NAME 
        } from './actions'





const initialState ={
    recipes: [],
    allRecipes: [],
    detail: [],
    diets: []
}


const reducer = (state = initialState, action ) => {

    switch(action.type){

        case GET_RECIPES:
            return {
                ...state, 
                recipes: action.payload,
                allRecipes: action.payload
            }

        case GET_NAME_RECIPES:
           if(action.payload.length === 0)  return state
           else{ 
            return{
                ...state,
                recipes: action.payload
            }
           }
            
    

        case GET_DIETS: 
            return {
                ...state,
                diets: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case CLEAR_DETAIL:
            return {
                ...state,
                detail: []
            };


        case POST_RECIPE:
            return {
                ...state,
            }



        case FILTER_CREATED:

            const createFilter = action.payload === 'created' ? state.allRecipes.filter(el => el.created) : state.allRecipes.filter(el => !el.created)

            return {
                ...state,
                recipes: action.payload === 'All' ? state.allRecipes : createFilter
            }



        case FILTER_RECIPES_BY_DIETS:

            const dietsFilter = action.payload === "All" ? state.allRecipes : state.allRecipes.filter( (d) => d.diets.find((el => el?.name === action.payload || el === action.payload)))   
            
            return{
                ...state,
                recipes: dietsFilter
            }
        
        case ORDEN_BY_NAME:
            const sortedRecipes = [...state.recipes]; // Clonar las recetas actuales para no mutar el estado original
            
            if (action.payload === 'A') {
                sortedRecipes.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            
            } else {
                sortedRecipes.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0));
            }
            
            return {
                ...state,
                recipes: sortedRecipes, // Actualizar el estado con las recetas ordenadas
            };

 

        default: 
            return {...state}
    }
};


export default reducer;

