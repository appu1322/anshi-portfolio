'use client';

import React, { useEffect } from 'react'

const AccessLogs = () => {

    const handleSubmit = async (data: object) => {
        try {
            await fetch("/api/access-log", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
        } catch (err) {
            console.log({ err });
        }
    };

    useEffect(() => {
        const formData = {
            id: crypto.randomUUID(),
            name: "N/A",
            geo: {
                type: "Point",
                coordinates: [0, 0], // [longitude, latitude]
            }
        };
        window.navigator.geolocation.getCurrentPosition(async (position) => {
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;
            formData.geo.coordinates = [longitude, latitude];
            handleSubmit(formData);
        }, () => {
            handleSubmit(formData);
        });
    }, [])

    return (
        <></>
    )
}

export default AccessLogs