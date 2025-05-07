import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";
import * as petModel from "../models/pet.model.ts";
import jwt from "jsonwebtoken";

type createUserBody = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  tel: string;
};

type loginUserBody = {
  email: string;
  password: string;
};

const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (
      !body.email ||
      !body.password ||
      !body.firstName ||
      !body.lastName ||
      !body.tel
    )
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (await userModel.isDuplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: "firstName or lastName is duplicated",
      });
    }
    const newUser = await userModel.createUser(
      body.email,
      body.password,
      body.firstName,
      body.lastName,
      body.tel
    );
    return c.json({
      success: true,
      data: newUser,
      msg: "Created new User!",
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

const getUser = async (c: Context) => {
  // console.log(c.get("userId"));
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await userModel.getUser(parseInt(param));
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

const getAllUser = async (c: Context) => {
  try {
    const allUser = await userModel.getAllUser();
    return c.json(allUser, 200);
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

const getAllPetFromUser = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await petModel.getAllPetFromUser(parseInt(param));
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

const loginUser = async (c: Context) => {
  try {
    const body = await c.req.json<loginUserBody>();
    if (!body.email || !body.password) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }

    const user = await userModel.getLoginUser(body.email, body.password);

    if (!user) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "User not found",
        },
        404
      );
    }

    // Create the JWT token
    const cookieKeyName = "MaAdoptKan-Cookie";
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_TOKEN as string
    );

    // Store the token inside the cookie
    c.header(
      "Set-Cookie",
      `${cookieKeyName}=${token}; Path=/; HttpOnly; Secure`
    );

    return c.json(
      {
        success: false,
        data: null,
        msg: "Login Successful",
      },
      200
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

export { createUser, getUser, getAllUser, getAllPetFromUser, loginUser };
