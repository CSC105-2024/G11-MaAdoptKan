import { axiosInstance } from "../axios";

export const newRequest = async (data) => {
    try {
        const res = await axiosInstance.postForm(`http://localhost:3000/request/create`, data);
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