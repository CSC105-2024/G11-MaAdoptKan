import { axiosInstance } from "../axios";

export const getPetData = async () => {
    try {
        const res = await axiosInstance.get('/pet/getAll');
        console.log(res);
        return {
            success: true,
            data: res.data,
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
        }
    }
}