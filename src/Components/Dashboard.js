import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { GoogleSheetInfo } from "../constants/google-sheet-info";
import DoughnutChart from "./Charts/DoughnutChart"; // Import the DoughnutChart component

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const initClient = () => {
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            apiKey: GoogleSheetInfo.apiKey,
            clientId: GoogleSheetInfo.clientId,
            scope: "https://www.googleapis.com/auth/spreadsheets",
            discoveryDocs: [
              "https://sheets.googleapis.com/$discovery/rest?version=v4",
            ],
          })
          .then(() => {
            authenticate();
          });
      });
    };

    const authenticate = async () => {
      const token = await getAccessToken();
      gapi.auth.setToken({ access_token: token });
      fetchData();
    };

    const getAccessToken = async () => {
      const url = "https://oauth2.googleapis.com/token";
      const params = new URLSearchParams();
      params.append(
        "grant_type",
        "urn:ietf:params:oauth:grant-type:jwt-bearer"
      );
      params.append("assertion", createJwt());

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const data = await response.json();
      return data.access_token;
    };

    const createJwt = () => {
      const header = {
        alg: "RS256",
        typ: "JWT",
      };

      const now = Math.floor(Date.now() / 1000);
      const payload = {
        iss: GoogleSheetInfo.serviceAccountEmail,
        scope: "https://www.googleapis.com/auth/spreadsheets",
        aud: "https://oauth2.googleapis.com/token",
        exp: now + 3600,
        iat: now,
      };

      const encodedHeader = btoa(JSON.stringify(header));
      const encodedPayload = btoa(JSON.stringify(payload));
      const signatureInput = `${encodedHeader}.${encodedPayload}`;

      const signature = signWithPrivateKey(
        signatureInput,
        GoogleSheetInfo.privateKey
      );

      return `${signatureInput}.${signature}`;
    };

    const signWithPrivateKey = (input, privateKey) => {
      const KJUR = require("jsrsasign");
      const key = KJUR.KEYUTIL.getKey(privateKey);
      const sig = new KJUR.crypto.Signature({ alg: "SHA256withRSA" });
      sig.init(key);
      sig.updateString(input);
      const signature = sig.sign();
      return KJUR.hextob64(signature);
    };

    const fetchData = async () => {
      try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: GoogleSheetInfo.spreadsheetId,
          range: "Application!A:E", // Adjust the range as needed
        });
        setData(response.result.values || []);
        setFilteredData(response.result.values || []);
      } catch (error) {
        console.error("Error fetching data from spreadsheet:", error);
      }
    };

    initClient();
  }, []);

  useEffect(() => {
    const lowercasedSearch = search.toLowerCase();
    const filtered = data.filter(
      (row) =>
        row[0].toLowerCase().includes(lowercasedSearch) || // Name
        row[1].toLowerCase().includes(lowercasedSearch) || // Email
        row[3].toLowerCase().includes(lowercasedSearch) // Course
    );
    setFilteredData(filtered);
  }, [search, data]);

  const deleteRowFromSheet = async (rowIndex) => {
    try {
      await gapi.client.sheets.spreadsheets.batchUpdate({
        spreadsheetId: GoogleSheetInfo.spreadsheetId,
        resource: {
          requests: [
            {
              deleteDimension: {
                range: {
                  sheetId: GoogleSheetInfo.sheetId, // Replace with your sheet ID
                  dimension: "ROWS",
                  startIndex: rowIndex,
                  endIndex: rowIndex + 1,
                },
              },
            },
          ],
        },
      });
    } catch (error) {
      console.error("Error deleting row from spreadsheet:", error);
    }
  };

  const handleDelete = async (index) => {
    await deleteRowFromSheet(index);
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    setFilteredData(newData);
  };

  // Process data for the chart
  const courseCounts = filteredData.reduce((acc, row) => {
    const course = row[3];
    if (!acc[course]) {
      acc[course] = 0;
    }
    acc[course]++;
    return acc;
  }, {});

  return (
    <div className="p-6 dark:bg-gray-600 dark:text-white">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by Name, Email, or Course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Danh sách nhập học
          </h1>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white dark:bg-gray-700">
              <thead>
                <tr className="w-full bg-gray-200 dark:bg-gray-800">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Telephone</th>
                  <th className="py-2 px-4 text-left">Course</th>
                  <th className="py-2 px-4 text-left">Birthdate</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr
                    key={index}
                    className={`w-full ${
                      index % 2 === 0
                        ? "bg-gray-100 dark:bg-gray-600"
                        : "bg-white dark:bg-gray-700"
                    }`}
                  >
                    <td className="py-2 px-4">{row[0]}</td>
                    <td className="py-2 px-4">{row[1]}</td>
                    <td className="py-2 px-4">{row[2]}</td>
                    <td className="py-2 px-4">{row[3]}</td>
                    <td className="py-2 px-4">{row[4]}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center dark:text-white">
            <div className="w-full sm:w-3/4 md:w-1/2">
              <DoughnutChart data={courseCounts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
