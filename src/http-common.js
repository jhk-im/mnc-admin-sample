import axios from "axios";

const baseURL = process.env.VUE_APP_API_URL || "http://localhost:3000";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});
