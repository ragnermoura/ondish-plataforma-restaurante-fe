
import { http } from "../../config";

export default {

    novoFuncionario: async (formData) => {
        try {
            const response = await http.post(
                "/funcionario/cadastrar",
                formData,
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

    meusFuncionarios: async (id_restaurante) => {
        try {
            const response = await http.get(`/funcionario/${id_restaurante}`, {
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



}