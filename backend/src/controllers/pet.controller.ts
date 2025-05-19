import type { Context } from "hono";
import * as petModel from "../models/pet.model.ts";
import * as requestModel from "../models/request.model.ts";
import type { $Enums } from "../generated/prisma/index.js";
import { writeFile } from "fs/promises";
import path from "path";

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

type editPetBody = createPetBody & {
  id: number;
};

// File saving logic
const saveFile = async (file: File, fileName: string): Promise<string> => {
  const buffer = await file.arrayBuffer(); // convert to buffer
  const savePath = path.join(process.cwd(), "files", fileName); // adjust as needed
  await writeFile(savePath, Buffer.from(buffer));
  return fileName;
};

const createPet = async (c: Context) => {
  try {
    const userId = c.get("userId");
    const formData = await c.req.parseBody();
    const body = JSON.parse(formData.json as string);

    const pictureFile = formData.pictureFile as File;
    const vaccineFile = formData.vaccineFile as File;

    const current = new Date(Date.now());
    let vaccineUrl: string = "";
    if (typeof vaccineFile !== "string") {
      vaccineUrl = await saveFile(
        vaccineFile,
        `${userId}-${current.getMilliseconds()}-${vaccineFile.name}`
      );
    }

    const pictureUrl = await saveFile(
      pictureFile,
      `${userId}-${current.getMilliseconds()}-${pictureFile.name}`
    );

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
      pictureUrl,
      body.phoneNumber,
      body.address,
      userId,
      body.color,
      body.dateOfBirth,
      Number(body.ageYear),
      Number(body.ageMonth),
      body.breed,
      vaccineUrl,
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
    const userId = c.get("userId");
    const formData = await c.req.parseBody();
    const body = JSON.parse(formData.json as string);
    console.log(body);

    const pictureFile = formData.pictureFile as File;
    const vaccineFile = formData.vaccineFile as File;

    const current = new Date(Date.now());

    //Save new files (if provided), or fallback to old URLs
    let vaccineUrl = (body.vaccineUrl as string).split("http://localhost:3000/")[1] || "";
    if (vaccineFile && typeof vaccineFile !== "string") {
      vaccineUrl = await saveFile(
        vaccineFile,
        `${userId}-${current.getMilliseconds()}-${vaccineFile.name}`
      );
    }

    let pictureUrl = (body.pictureUrl as string).split("http://localhost:3000/")[1] || "";
    if (pictureFile && typeof pictureFile !== "string") {
      pictureUrl = await saveFile(
        pictureFile,
        `${userId}-${current.getMilliseconds()}-${pictureFile.name}`
      );
    }

    console.log((body.vaccineUrl as string).split("http://localhost:3000/"), (body.pictureUrl as string).split("http://localhost:3000/"));

    if (
      !body.id ||
      !body.name ||
      !body.type ||
      !body.gender ||
      !pictureUrl ||
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
      Number(body.id),
      body.name,
      body.type,
      body.gender,
      pictureUrl,
      body.phoneNumber,
      body.address,
      userId,
      body.color,
      body.dateOfBirth,
      Number(body.ageYear),
      Number(body.ageMonth),
      body.breed,
      vaccineUrl,
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
    const count = c.req.query("count");
    const allPet = await petModel.getAllPet(Number(count));
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


export {
  createPet,
  editPet,
  getPet,
  getAllPet,
  deletePet,
  getAllRequestFromPet,
};
