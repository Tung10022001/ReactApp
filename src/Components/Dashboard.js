import React, { useEffect, useState } from "react";
import BarChart from "./Charts/BarChart";
//import LineChart from "./Charts/LineChart";
//import DoughnutChart from "./Charts/DoughnutChart";
import { gapi } from "gapi-script";
import { GoogleSheetInfo } from "../constants/google-sheet-info";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const initClient = () => {
      gapi.load("client:auth2", () => {
        gapi.client.init({
          apiKey: GoogleSheetInfo.apiKey,
          clientId: GoogleSheetInfo.clientId,
          scope: "https://www.googleapis.com/auth/spreadsheets",
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4",
          ],
        });
      });
    };

    const authenticate = async () => {
      const token = await getAccessToken();
      gapi.auth.setToken({ access_token: token });
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
      // Implement the signing function using a library like jsrsasign
      // For example:
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
          range: "Application!A1:E10", // Adjust the range as needed
        });
        setData(response.result.values);
      } catch (error) {
        console.error("Error fetching data from spreadsheet:", error);
      }
    };

    initClient();
    authenticate();
    fetchData();
  }, []);

  return (
    <div className="p-6 dark:bg-gray-600 dark:text-white">
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Danh sách nhập học
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700">
              <thead>
                <tr className="w-full bg-gray-200 dark:bg-gray-800">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Telephone</th>
                  <th className="py-2 px-4 text-left">Course</th>
                  <th className="py-2 px-4 text-left">Birthdate</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
