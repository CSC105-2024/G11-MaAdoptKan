import { axiosInstance } from "../axios";

export const createPet = async (formData) => {
    try {
        const res = await axiosInstance.post("/pet/create", formData);
        return {
            success: true,
            data: res.data,
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
        }
    }
}