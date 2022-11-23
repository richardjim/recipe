import axiosClient from "../axiosClient";
import store  from "../store";
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {

    store.commit("setSearchedMeals", data.meals);
  });
}
