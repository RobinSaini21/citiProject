import { instance } from "../instance/instance";
import axios from "axios";

export const authlogin = async (data) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res)
      return res;
    } catch (err) {
      return err;
    }
  };
  