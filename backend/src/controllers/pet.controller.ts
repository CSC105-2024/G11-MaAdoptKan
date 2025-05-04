import type { Context } from "hono";
import * as petModel from "../models/pet.model.ts";
import * as requestModel from "../models/request.model.ts"
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
      msg: "Created new Pet!",
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

const editPet = async (c: Context) => {
  console.log(true);
  try {
    const petId = c.req.query("petId");
    const body = await c.req.json<createPetBody>();
    console.log(body);
    if (
      !petId ||
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
    const newPet = await petModel.editPet(
      parseInt(petId),
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
      msg: "Edit Pet!",
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

const getPet = async (c: Context) => {
  try {
    const petId = c.req.query("petId");
    if (petId !== undefined && petId !== null) {
      const data = await petModel.getPet(parseInt(petId));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
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

const getAllPet = async (c: Context) => {
  try {
    const allPet = await petModel.getAllPet();
    return c.json(allPet, 200);
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

const deletePet = async (c: Context) => {
  try {
    const petId = c.req.query("petId");
    if (petId !== undefined && petId !== null) {
      const data = await petModel.deletePet(parseInt(petId));
      return c.json(
        {
          data: data,
          msg: "Delete Success",
        },
        200
      );
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
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

const getAllRequestFromPet = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await requestModel.getAllRequestFromPet(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
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

export { createPet, editPet, getPet, getAllPet, deletePet, getAllRequestFromPet };
