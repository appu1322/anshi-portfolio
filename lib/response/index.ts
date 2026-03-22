import { NextResponse } from 'next/server';

const makeResponse = (
  statusCode: number,
  success: boolean,
  message: string,
  // eslint-disable-next-line
  payload: any = undefined,
  // eslint-disable-next-line
  meta: any = {}) => {
  return NextResponse.json({
    success,
    message,
    data: payload,
    meta
  }, { status: statusCode })
};

export { makeResponse };
