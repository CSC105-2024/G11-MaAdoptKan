import { axiosInstance } from "../axios";

export const sendRequet = async (data) => {
    try {
        const res = await axiosInstance.post(`localhost:3000/request/create`, data);
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