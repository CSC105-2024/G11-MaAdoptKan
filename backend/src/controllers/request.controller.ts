import type {Context} from "hono";
import * as requestModel from "../models/request.model.ts";
import type {$Enums} from "../generated/prisma/index.js";
import {saveFile} from "./pet.controller.js";

type createRequestModel = {
    houseEn: $Enums.HouseEn;
    financial: $Enums.Financial;
    pickup: $Enums.Pickup;
    houseImg: any;
    addressRequest: string;
    userId: number;
    petId: number;
};

const createRequest = async (c: Context) => {

    try {
        const formData = await c.req.parseBody();
        const body = JSON.parse(formData.json as string);

        const current = new Date(Date.now());
        let houseImgUrl: string = "";
        const houseImgFile = formData.houseImg as File;
        if (typeof houseImgFile !== "string") {
            houseImgUrl = await saveFile(
                houseImgFile,
                `${body.userId}-${current.getMilliseconds()}-${houseImgFile.name}`
            );
        }

        if (
            !body.houseEn ||
            !body.financial ||
            !body.pickup ||
            !body.houseImg ||
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
            houseImgUrl,
            body.addressRequest,
            Number(body.userId),
            Number(body.petId)
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
            if (data) {
                const formattedData = {
                    ...data,
                    firstName: data.User.firstName,
                    lastName: data.User.lastName,
                    email: data.User.email,
                    phoneNum: data.User.tel,
                    address: data.addressRequest,
                    houseImg: `http://localhost:3000/${data.houseImg}`,
                    houseEnviron: requestModel.formatEnumValue(data.houseEn, 'houseEn'),
                    financial: requestModel.formatEnumValue(data.financial, 'financial'),
                    pickup: requestModel.formatEnumValue(data.pickup, 'pickup')
                };

                return c.json({
                    success: true,
                    data: formattedData,
                    msg: "Request found"
                }, 200);
            } else {
                return c.json({
                    success: false,
                    data: null,
                    msg: "Request not found"
                }, 404);
            }
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
        const formattedRequests = allRequest.map(request => ({
            ...request,
            firstName: request.User.firstName,
            lastName: request.User.lastName,
            email: request.User.email,
            phoneNum: request.User.tel,
            address: request.addressRequest,
            houseImg: `http://localhost:3000/${request.houseImg}`,
            houseEnviron: requestModel.formatEnumValue(request.houseEn, 'houseEn'),
            financial: requestModel.formatEnumValue(request.financial, 'financial'),
            pickup: requestModel.formatEnumValue(request.pickup, 'pickup')
        }));

        return c.json({
            success: true,
            data: formattedRequests,
            msg: "All requests retrieved"
        }, 200);
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
        const petId = c.req.param('petId');
        if (!petId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Pet ID is required",
                },
                400
            );
        }

        const requests = await requestModel.getAllRequestFromPet(parseInt(petId));
        const formattedRequests = requests.map(request => ({
            ...request,
            firstName: request.User.firstName,
            lastName: request.User.lastName,
            email: request.User.email,
            phoneNum: request.User.tel,
            address: request.addressRequest,
            houseImg: `http://localhost:3000/${request.houseImg}`,
            houseEnviron: requestModel.formatEnumValue(request.houseEn, 'houseEn'),
            financial: requestModel.formatEnumValue(request.financial, 'financial'),
            pickup: requestModel.formatEnumValue(request.pickup, 'pickup')
        }));

        return c.json({
            success: true,
            data: formattedRequests,
            msg: "Pet requests retrieved"
        }, 200);
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

const deleteRequest = async (c: Context) => {
    try {
        const requestId = c.req.param('id');
        if (!requestId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Request ID is required",
                },
                400
            );
        }

        const deletedRequest = await requestModel.deleteRequest(parseInt(requestId));

        return c.json({
            success: true,
            data: deletedRequest,
            msg: "Request deleted successfully"
        }, 200);
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

export {createRequest, getRequest, getAllRequest, getAllRequestFromPet, deleteRequest};