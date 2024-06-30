import { http } from "../../config";

export default {
  login: async (email, senha) => {
    try {
      const response = await http.post(
        "/login",
        {
          email: email,
          senha: senha,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cadastro: async (formData) => {
    try {
      const response = await http.post(
        "/usuario/cadastrar/restaurante",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "multipart/form-data",
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

  perfil: async (formData) => {
    try {
      const response = await http.post("/restaurante/cadastrar", formData, {
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
