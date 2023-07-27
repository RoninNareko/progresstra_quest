
import axios from "axios";
import apiConfig from "../configs/api-config.json";

const fetchAccessToken = async () => {
   const getAccesTokenApi = "http://84.201.188.117:5021/api/v3/clients/accesstoken";
    try {
      const config = apiConfig;
      if (!config || !config.accessToken || !config.idClient) {
        console.error("Invalid or incomplete apiConfig.");
        return;
      }

      const headers = {
        accept: "application/json",
        AccessKey: config.accessToken,
        ContentType: "application/json-patch+json",
      };

      const data = {
        idClient: config.idClient,
        accessToken: config.accessToken,
        paramName: config.paramName,
        paramValue: config.paramValue,
        latitude: config.latitude,
        longitude: config.longitude,
        sourceQuery: config.sourceQuery,
      };

      const response = await axios.post(getAccesTokenApi, data, { headers });
      return response.data.accessToken
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  export default fetchAccessToken