import { db } from "../index.ts";

const createVaccine = async (vaccine: string, petId: number) => {
    const Vaccine = await db.vaccine.create({
        data: {
            vaccine: vaccine,
            petId: petId
        }
    })
    return Vaccine;
}

export {createVaccine}