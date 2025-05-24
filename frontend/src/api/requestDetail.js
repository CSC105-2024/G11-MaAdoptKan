import {axiosInstance} from "../axios.js";

export const getRequestsByPetId = async (petId) => {
    try {
        const res = await axiosInstance.get(`/request/pet/${petId}`);
        return {
            success: true,
            data: res.data.data, // ข้อมูลอยู่ใน res.data.data ตาม response structure
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
        };
    }
};

export const getRequest = async (requestId) => {
    try {
        const res = await axiosInstance.get(`/request/get?id=${requestId}`);
        return {
            success: true,
            data: res.data.data,
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
        };
    }
};

export const deleteRequest = async (requestId) => {
    try {
        const res = await axiosInstance.delete(`/request/delete/${requestId}`);
        return {
            success: true,
            data: res.data.data,
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
        };
    }
};

export const getAllRequests = async () => {
    try {
        const res = await axiosInstance.get(`/request/getAll`);
        return {
            success: true,
            data: res.data.data,
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
        };
    }
};