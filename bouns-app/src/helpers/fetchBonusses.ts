
import axios from "axios";
import apiConfig from "../configs/api-config.json";

const fetchBonusses = async (accessToken:string) => {
  const getBonussesApi = `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${accessToken}`;

    try {
      const config = apiConfig;
      if (!config || !config.accessToken) {
        console.error("Invalid or incomplete apiConfig.");
        return;
      }

      const headers = {
        accept: 'application/json',
        AccessKey: config.accessToken,
      };

      const response = await axios.get(getBonussesApi, { headers });
      return response.data.data
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  export default fetchBonusses;