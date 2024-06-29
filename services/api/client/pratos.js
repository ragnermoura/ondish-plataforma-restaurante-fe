import { http } from "../../config";

export default {
  cozinha: async (cozinha, id_restaurante) => {
    try {
      const response = await http.post(
        "/cozinha-restaurante/cadastrar",
        {
          nome_cozinha: cozinha,
          id_restaurante: id_restaurante,
        },
        {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
  minhasCozinhas: async (id_restaurante) => {
    try {
      const response = await http.get(`/cozinha-restaurante/restaurante/${id_restaurante}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
  pratos: async (formData) => {
    try {
      const response = await http.post("/prato/cadastrar", formData, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
};
