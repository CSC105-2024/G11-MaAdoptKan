import type { $Enums } from "../generated/prisma/index.js";
import { db } from "../index.ts";

const createRequest = async (
    houseEn: $Enums.HouseEn,
    financial: $Enums.Financial,
    pickup: $Enums.Pickup,
    houseImg: string,
    addressRequest: string,
    userId: number,
    petId: number
) => {
    const requestForm = await db.requestForm.create({
        data:{
            houseEn,
            financial,
            pickup,
            houseImg,
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
        },
        include: {
            User: true,
            Pet: true
        }
    })
    return requestForm
}

const getAllRequest = async () => {
    const requestForm = await db.requestForm.findMany({
        include: {
            User: true,
            Pet: true
        }
    })
    return requestForm
}

const getAllRequestFromPet = async (petId:number) => {
    const requestForm = await db.requestForm.findMany({
        where:{
            petId
        },
        include: {
            User: true,
            Pet: true
        }
    })
    return requestForm;
}

const formatEnumValue = (value: string, type: 'financial' | 'pickup' | 'houseEn') => {
    switch (type) {
        case 'financial':
            const financialMap: Record<string, string> = {
                'belowTenThousand': '0-10,000',
                'tenThousand': '10,001-20,000',
                'twentyThousand': '20,001-30,000',
                'thirtyThousand': '30,001-40,000',
                'fourThousand': '40,001-50,000',
                'aboveFiveThousand': 'More than 50,000'
            };
            return financialMap[value] || value;

        case 'pickup':
            const pickupMap: Record<string, string> = {
                'selfPickup': 'Self Pickup',
                'delivery': 'Delivery'
            };
            return pickupMap[value] || value;

        case 'houseEn':
            return value;

        default:
            return value;
    }
};

const deleteRequest = async (id: number) => {
    const deletedRequest = await db.requestForm.delete({
        where: {
            id: id
        }
    });
    return deletedRequest;
};

export {createRequest, getRequest, getAllRequest, getAllRequestFromPet, formatEnumValue, deleteRequest}