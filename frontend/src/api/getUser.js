import { axiosInstance } from "../axios";

export const getUser = async (data) => {
    try {
        const res = await axiosInstance.get(`http://localhost:3000/user/get?id=${data}`);
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