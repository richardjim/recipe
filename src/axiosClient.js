import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

//   www.themealdb.com/api/json/v1/1/list.php?i=list

export default axiosClient;
