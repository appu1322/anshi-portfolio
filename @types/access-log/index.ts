export interface IAccessLog {
    id: string;
    name: string;
    geo: {
        type: "Point",
        coordinates: [number, number], // [longitude, latitude]
    },
    ipAddress: string;
    visited: number;
    access: [
        {
            timestamp: Date;
        }
    ]
    status: "ACTIVE" | "INACTIVE";
}