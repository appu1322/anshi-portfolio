"use client";

import React, { useEffect, useState } from "react";

type AccessEntry = {
  timestamp: string;
};

type AccessLog = {
  id: string;
  name: string;
  geo: {
    type: "Point";
    coordinates: [number, number]; // [lng, lat]
  };
  ipAddress: string;
  access: AccessEntry[];
  status: "ACTIVE" | "INACTIVE";
};

export default function AccessLogsPage() {
  const [logs, setLogs] = useState<AccessLog[]>([]);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [showMapFor, setShowMapFor] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/access-log")
      .then((res) => res.json())
      .then((data) => setLogs(data.data || []))
      .catch(console.error);
  }, []);

  const toggleTimeline = (id: string) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  const toggleMap = (id: string) => {
    setShowMapFor((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Access Logs</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">IP Address</th>
              <th className="border p-2">Access Count</th>
              <th className="border p-2">Last Access</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => {
              const accessCount = log.access?.length ?? 0;
              const lastAccess =
                accessCount > 0
                  ? new Date(
                      log.access[accessCount - 1].timestamp
                    ).toLocaleString()
                  : "—";

              const [lng, lat] = log.geo.coordinates;

              return (
                <React.Fragment key={`log.id-${log.id}`}>
                  {/* Main Row */}
                  <tr>
                    <td className="border p-2">{log.name}</td>
                    <td className="border p-2">{log.ipAddress}</td>
                    <td className="border p-2 text-center font-semibold">
                      {accessCount}
                    </td>
                    <td className="border p-2">{lastAccess}</td>
                    <td className="border p-2">
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          log.status === "ACTIVE"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {log.status}
                      </span>
                    </td>
                    <td className="border p-2 text-center space-x-3">
                      <button
                        onClick={() => toggleTimeline(log.id)}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Timeline
                      </button>
                      <button
                        onClick={() => toggleMap(log.id)}
                        className="text-indigo-600 hover:underline text-sm"
                      >
                        Map
                      </button>
                    </td>
                  </tr>

                  {/* Timeline */}
                  {expandedRow === log.id && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 p-4">
                        <h3 className="font-semibold text-sm mb-2">
                          Access Timeline ({accessCount})
                        </h3>

                        {accessCount === 0 ? (
                          <p className="text-sm text-gray-500">
                            No access history
                          </p>
                        ) : (
                          <ul className="max-h-48 overflow-y-auto border rounded">
                            {[...log.access]
                              .reverse()
                              .map((entry, idx) => (
                                <li
                                  key={idx}
                                  className="px-3 py-2 border-b last:border-b-0 text-sm"
                                >
                                  {new Date(
                                    entry.timestamp
                                  ).toLocaleString()}
                                </li>
                              ))}
                          </ul>
                        )}
                      </td>
                    </tr>
                  )}

                  {/* Map Preview */}
                  {showMapFor === log.id && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 p-4">
                        <h3 className="font-semibold text-sm mb-2">
                          Location Preview
                        </h3>

                        <div className="w-full h-64 border rounded overflow-hidden">
                          <iframe
                            title="Map Preview"
                            className="w-full h-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://maps.google.com/maps?q=${lat},${lng}&z=12&output=embed`}
                          />
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                          Lat: {lat}, Lng: {lng}
                        </p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}

            {logs.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4">
                  No access logs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
