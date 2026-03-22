import { MongoClient } from 'mongodb';

const uri: string = 'mongodb+srv://Apoorv:apoorv@cluster0.yljucoy.mongodb.net/';
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri, options);
        // eslint-disable-next-line
        (global as any)._mongoClientPromise = client.connect();
    }
    // eslint-disable-next-line
    clientPromise = (global as any)._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export { clientPromise };
