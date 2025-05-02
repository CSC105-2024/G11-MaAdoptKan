import type { Context } from "hono";
import * as petModel from "../models/pet.model.ts";
import type { $Enums } from "../generated/prisma/index.js";

type createPetBody = {
  name: string;
  type: $Enums.Type;
  gender: $Enums.Gender;
  pictureUrl: string;
  color?: string;
  dateOfBirth?: Date;
  ageYear?: number;
  ageMonth?: number;
  breed?: string;
  phoneNumber: string;
  address: string;
  vaccineUrl?: string;
  userId: number;
  vaccines?: Record<"vaccine", string>[];
};

const createPet = async (c: Context) => {
  console.log(true);
  try {
    const body = await c.req.json<createPetBody>();
    console.log(body);
    if (
      !body.name ||
      !body.type ||
      !body.gender ||
      !body.pictureUrl ||
      !body.address ||
      !body.phoneNumber
    ) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }
    const newPet = await petModel.createPet(
      body.name,
      body.type,
      body.gender,
      body.pictureUrl,
      body.phoneNumber,
      body.address,
      body.userId,
      body.color,
      body.dateOfBirth,
      body.ageYear,
      body.ageMonth,
      body.breed,
      body.vaccineUrl,
      body.vaccines
    );

    return c.json({
      success: true,
      data: newPet,
      msg: "Created new Petnp!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export { createPet };
