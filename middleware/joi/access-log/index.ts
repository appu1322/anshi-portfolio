import joi from 'joi';
import { IAccessLog } from '@/@types';
import { NextRequest, NextResponse } from 'next/server';
import { makeResponse } from '@/lib';


export const addAccessLogValidation = async (req: NextRequest, body: IAccessLog) => {
    const activity = joi.object({
        id: joi.string()
            .optional(),
        name: joi.string()
            .required(),
        geo: joi.object({
            type: joi.string()
                .valid("Point")
                .required(),
            coordinates: joi.array()
                .items(
                    joi.number().required(),
                    joi.number().required()
                )
                .length(2)
                .required(),
        }).required(),
    });

    const { error } = activity.validate(body);
    if (error) {
        return makeResponse(400, false, error.message);
    }
    return NextResponse.next();
};