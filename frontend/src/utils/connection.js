import axios from "axios";

//const baseUrl = "https://mobile-app-challenge.herokuapp.com";
//const baseUrl = `${process.env.REACT_APP_API_URL}`;
const baseUrl = "http://localhost:5000";

const connectionInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default connectionInstance;
