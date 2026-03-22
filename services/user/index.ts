import { IAccessLog } from '@/@types';
import { DB_NAME } from '@/constant';
import { clientPromise } from '@/loader';

const modelName = 'AccessLogs';
const addAccessLog = async (payload: IAccessLog) => new Promise<IAccessLog | null>(async (resolve, reject) => {
    try {
        const payloadWithTimestamps = {
            ...payload,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const client = await clientPromise;
        const db = client.db(DB_NAME);
        const AccessLogsCollection = db.collection<IAccessLog>(modelName)
        const result = await AccessLogsCollection.insertOne(payloadWithTimestamps);
        const data = await AccessLogsCollection.findOne({ _id: result.insertedId });
        resolve(data)
    } catch (error) {
        reject(error);
    }
});

const getAccessLog = async (search = {}, project = { __v: 0 }) => new Promise<IAccessLog | null>(async (resolve, reject) => {
    try {
        const client = await clientPromise;
        const db = client.db(DB_NAME);
        const AccessLogsCollection = db.collection<IAccessLog>(modelName);
        const result = await AccessLogsCollection.aggregate<IAccessLog>([
            {
                $match: search
            },
            {
                $project: {
                    password: 0,
                    ...project
                }
            }
        ]).toArray();

        resolve(result.length ? result[0] : null);
    } catch (error) {
        reject(error);
    }
});

const getAccessLogs = async (search = {}, project = { __v: 0 }) => new Promise<IAccessLog[] | null>(async (resolve, reject) => {
    try {
        const client = await clientPromise;
        const db = client.db(DB_NAME);
        const AccessLogsCollection = db.collection<IAccessLog>(modelName);
        const result = await AccessLogsCollection.aggregate<IAccessLog>([
            {
                $match: search
            },
            {
                $project: {
                    password: 0,
                    ...project
                }
            }
        ]).toArray();

        resolve(result.length ? result : null);
    } catch (error) {
        reject(error);
    }
});

const updateAccessLog = async (
  search = {},
  payload: Partial<IAccessLog> = {},
  options = {}
): Promise<IAccessLog | null> => {
  try {
    const upsert = (options as { upsert?: boolean })?.upsert;
    const now = new Date();

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const AccessLogsCollection = db.collection<IAccessLog>(modelName);

    // 🔍 Fetch existing geo only
    const existing = await AccessLogsCollection.findOne(search, {
      projection: { geo: 1 },
    });

    const incomingGeo = payload.geo?.coordinates;
    const existingGeo = existing?.geo?.coordinates;

    const isIncomingZeroGeo =
      incomingGeo?.[0] === 0 && incomingGeo?.[1] === 0;

    const isExistingValidGeo =
      existingGeo &&
      !(existingGeo[0] === 0 && existingGeo[1] === 0);

    const hasExistingGeo = Array.isArray(existingGeo);

    /**
     * RULE 1:
     * If no geo exists → set default [0,0]
     */
    if (!hasExistingGeo && !incomingGeo) {
      payload.geo = {
        type: "Point",
        coordinates: [0, 0],
      };
    }

    /**
     * RULE 2:
     * Do NOT overwrite valid geo with [0,0]
     */
    if (isIncomingZeroGeo && isExistingValidGeo) {
      delete payload.geo;
    }

    const updateQuery = {
      $set: {
        ...payload,
        updatedAt: now,
      },
      $inc: {
        visited: 1,
      },
      $push: {
        access: { timestamp: now },
      },
      $setOnInsert: {
        createdAt: now,
      },
    };

    const result = await AccessLogsCollection.findOneAndUpdate(
      search,
      updateQuery,
      {
        upsert: upsert ?? false,
        returnDocument: "after",
      }
    );

    return result;
  } catch (error) {
    throw error;
  }
};



export { addAccessLog, getAccessLog, getAccessLogs, updateAccessLog };
