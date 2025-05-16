import { axiosInstance } from "../axios";

export const editPet = async (formData) => {
    try {
        const res = await axiosInstance.patchForm("/pet/edit", formData);
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