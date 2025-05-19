import { axiosInstance } from "../axios";

export const deletePet = async (petId) => {
    try {
        const res = await axiosInstance.delete(`/pet/delete?petId=${petId}`);
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