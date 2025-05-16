import { axiosInstance } from "../axios";

export const getPetFromUser = async () => {
    try {
        const res = await axiosInstance.get('/user/pets');
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