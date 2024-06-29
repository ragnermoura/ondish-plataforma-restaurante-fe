import { http } from "../../config";

export default {
  cadastro: async (numero, capacidade, localizacao, id_restaurante) => {
    try {
      const response = await http.post(
        "/mesa/nova-mesa",
        {
          numero: numero,
          capacidade: capacidade,
          localizacao: localizacao,
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

  minhasMesas: async (id_restaurante) => {
    try {
      const response = await http.get(`/mesa/restaurante/${id_restaurante}`, {
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

  delete: async (id) => {
    try {
      const response = await http.delete(`/mesa/delete/${id}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
      });

      return response;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
};
