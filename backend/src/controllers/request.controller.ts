import type { Context } from "hono";
import * as requestModel from "../models/request.model.ts";
import type { $Enums } from "../generated/prisma/index.js";

type createRequestModel = {
  houseEn: $Enums.HouseEn;
  financial: $Enums.Financial;
  pickup: $Enums.Pickup;
  addressRequest: string;
  userId: number;
  petId: number;
};

const createRequest = async (c: Context) => {
  try {
    const body = await c.req.json<createRequestModel>();
    if (
      !body.houseEn ||
      !body.financial ||
      !body.pickup ||
      !body.addressRequest ||
      !body.userId ||
      !body.petId
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
    const newRequest = await requestModel.createRequest(
      body.houseEn,
      body.financial,
      body.pickup,
      body.addressRequest,
      body.userId,
      body.petId
    );

    return c.json({
      success: true,
      data: newRequest,
      msg: "Created new Request!",
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

const getRequest = async (c: Context) => {
  try {
    const requestId = c.req.query("id");
    if (requestId !== undefined && requestId !== null) {
      const data = await requestModel.getRequest(parseInt(requestId));
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

const getAllRequest = async (c: Context) => {
    try {
      const allRequest = await requestModel.getAllRequest();
      return c.json(allRequest, 200);
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


export { createRequest, getRequest, getAllRequest };
