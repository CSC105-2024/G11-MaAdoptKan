import type { Context } from "hono";
import * as vaccineModel from "../models/vaccine.models.ts";

type createVaccineBody = {
    vaccine: string
}

const createVaccine = async(c: Context)=> {
    try{
        const petId = parseInt(c.req.param('petId'));
        const body = await c.req.json<createVaccineBody>();
        const newVaccine = await vaccineModel.createVaccine(body.vaccine,petId);
        return c.json(newVaccine, 200);


    }catch(e){

    }
}

export {createVaccine}