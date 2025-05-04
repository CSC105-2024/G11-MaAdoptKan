import type { $Enums } from "../generated/prisma/index.js";
import { db } from "../index.ts";

const createPet = async (
  name: string,
  type: $Enums.Type,
  gender: $Enums.Gender,
  pictureUrl: string,
  phoneNumber: string,
  address: string,
  userId: number,
  color?: string,
  dateOfBirth?: Date,
  ageYear?: number,
  ageMonth?: number,
  breed?: string,
  vaccineUrl?: string,
  vaccines?: Record<"vaccine", string>[],
) => {
  const pet = await db.pet.create({
    data: {
      name,
      type,
      pictureUrl,
      gender: gender,
      color,
      dateOfBirth,
      ageYear,
      ageMonth,
      breed,
      phoneNumber,
      address,
      vacineUrl: vaccineUrl,
      userId,
      ...(vaccines && {
        Vaccine: {
          createMany: {
            data: vaccines,
          }
        }
      }),
    },
  });
  return pet;
};

const editPet = async (
  id: number,
  name: string,
  type: $Enums.Type,
  gender: $Enums.Gender,
  pictureUrl: string,
  phoneNumber: string,
  address: string,
  userId: number,
  color?: string,
  dateOfBirth?: Date,
  ageYear?: number,
  ageMonth?: number,
  breed?: string,
  vaccineUrl?: string,
  vaccines?: Record<"vaccine", string>[],
) => {
  const pet = await db.pet.update({
    where:{
      id: id
    },
    data: {
      name,
      type,
      pictureUrl,
      gender: gender,
      color,
      dateOfBirth,
      ageYear,
      ageMonth,
      breed,
      phoneNumber,
      address,
      vacineUrl: vaccineUrl,
      userId,
      ...(vaccines && {
        Vaccine: {
          createMany: {
            data: vaccines,
          }
        }
      }),
    },
  });
  return pet;
};

const getPet = async (id: number) => {
  const pet = await db.pet.findUnique({
    where: {
      id,
    },
  });
  return pet;
};

const getAllPet = async () => {
  const pet = await db.pet.findMany({});
  return pet;
};

const deletePet = async (id: number) => {
  const pet = await db.pet.delete({
    where:{
      id:id
    }
  })
  return pet;
}

export { createPet, getPet, getAllPet, editPet, deletePet };
