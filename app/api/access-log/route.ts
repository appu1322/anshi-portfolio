import { NextRequest } from 'next/server';
import { addAccessLog, getAccessLogs, updateAccessLog } from '@/services';
import { addAccessLogValidation } from '@/middleware';
import { IAccessLog } from '@/@types';
import { RESPONSE_MESSAGE, makeResponse } from '@/lib';
import { headers } from 'next/headers';


export async function getUserIP() {
    const headersList = await headers();

    const forwardedFor = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    console.log({ aa: headersList.entries() });

    // x-forwarded-for can contain multiple IPs
    return forwardedFor?.split(",")[0] || realIp || "unknown";
}

export async function POST(request: NextRequest) {
    try {
        const body: IAccessLog = await request.json();
        const data = await addAccessLogValidation(request, body);
        if (data.status !== 200) {
            return data;
        }

        const ip = await getUserIP();
        console.log({ ip });
        body.ipAddress = ip;

        const result = await addAccessLog({ ...body, status: "ACTIVE" });
        return makeResponse(200, true, RESPONSE_MESSAGE.fetch, result);
    } catch (error) {
        const err = error instanceof Error ? error : { message: "" }
        return makeResponse(400, true, err.message);
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body: IAccessLog = await request.json();
        const data = await addAccessLogValidation(request, body);
        if (data.status !== 200) {
            return data;
        }

        const ip = await getUserIP();
        body.ipAddress = ip;

        const result = await updateAccessLog({ ipAddress: ip }, { ...body, status: "ACTIVE" }, { upsert: true, new: true });
        return makeResponse(200, true, RESPONSE_MESSAGE.fetch, result);
    } catch (error) {
        const err = error instanceof Error ? error : { message: "" }
        return makeResponse(400, true, err.message);
    }
}

export async function GET(request: NextRequest) {
    try {
        console.log("koo");
        
        const result = await getAccessLogs({});
        return makeResponse(200, true, RESPONSE_MESSAGE.fetch, result);
    } catch (error) {
        const err = error instanceof Error ? error : { message: "" }
        return makeResponse(400, true, err.message);
    }
}

