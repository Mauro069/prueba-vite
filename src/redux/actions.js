import axios from "axios";


export const GET_RECIPES = "GET_RECIPES";
export const GET_NAME_RECIPES = "GET_NAME_RECIPES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPE = "POST_RECIPE";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const ORDEN_BY_NAME = "ORDEN_BY_NAME";

export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_RECIPES_BY_DIETS = "FILTER_RECIPES_BY_DIETS";




export const getRecipes = () => {
  return async function (dispatch) {
    let apiData = await axios.get("/recipes");

    const recipes = apiData.data;

    return dispatch({
      type: GET_RECIPES,
      payload: recipes,
    });
  };
};

export const getNameRecipes = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get("/recipes?name=" + name);

      return dispatch({
        type: GET_NAME_RECIPES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/recipes/${id}`);

      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetail = () => {
  return{
    type: CLEAR_DETAIL,
  }
}

export const getDiets = () => {
  return async function (dispatch) {
    let json = await axios.get("/diets");

    return dispatch({
      type: GET_DIETS,
      payload: json.data,
    });
  };
};

export const postRecipe = (payload) => {
  return async function () {
    const response = await axios.post("/recipes", payload);
    // console.log(respose);

    return response;
  };
};

//____________________________________________ Filtros

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const filterRecipesByDiets = (payload) => {
  return {
    type: FILTER_RECIPES_BY_DIETS,
    payload,
  };
};

//______________________________________________ Ordenamientos

export const ordenByName = (payload) => {
  console.log(payload);
  return {
    type: ORDEN_BY_NAME,
    payload,
  };
};
