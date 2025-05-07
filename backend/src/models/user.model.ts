import { db } from "../index.ts";

const isDuplicate = async (firstName: string, lastName: string) => {
  const user = await db.user.findFirst({
    where: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};

const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  tel: string
) => {
  const user = await db.user.create({
    data: {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      tel: tel,
    },
  });
  return user;
};

const getUser = async (id: number) => {
  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

const getAllUser = async () => {
  const user = await db.user.findMany({});
  return user;
};

const getLoginUser = async (email: string, password: string) => {
    console.log(email, password);
    const user = await db.user.findUnique({
        where: {
            email,
            password
        }
    });
    return user;
};

export { isDuplicate, createUser, getUser, getAllUser, getLoginUser };
