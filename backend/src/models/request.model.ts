import type { $Enums } from "../generated/prisma/index.js";
import { db } from "../index.ts";

const createRequest = async (
  houseEn: $Enums.HouseEn,
  financial: $Enums.Financial,
  pickup: $Enums.Pickup,
  addressRequest: string,
  userId: number,
  petId: number
) => {
    const requestForm = await db.requestForm.create({
        data:{
            houseEn,
            financial,
            pickup,
            addressRequest,
            userId,
            petId,
        },
    })
    return requestForm;
};

const getRequest = async ( id:number) => {
    const requestForm = await db.requestForm.findUnique({
        where: {
            id:id
        }
    })
    return requestForm
}

const getAllRequest = async () => {
    const requestForm = await db.requestForm.findMany({
    })
    return requestForm
}

const getAllRequestFromPet = async (petId:number) => {
    const requestForm = await db.requestForm.findMany({
        where:{
            petId
        }
    })
    return requestForm;
}

export {createRequest, getRequest, getAllRequest, getAllRequestFromPet}
