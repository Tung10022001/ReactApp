// src/SheetsForm.js
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { GoogleSheetInfo } from "../constants/google-sheet-info";

const formKey = {
  name: "name",
  email: "email",
  tel: "tel",
  course: "course",
  birth: "birth",
};

const SheetsForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [inputData, setInputData] = useState({
    [formKey.name]: "",
    [formKey.email]: "",
    [formKey.tel]: "",
    [formKey.course]: "",
    [formKey.birth]: "",
  });

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

    initClient();
    authenticate();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("in in in");
    e.preventDefault();

    try {
      const response = await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: GoogleSheetInfo.spreadsheetId,
        valueInputOption: "RAW",
        range: "Application",
        resource: {
          values: [
            [
              inputData[formKey.name],
              inputData[formKey.email],
              inputData[formKey.tel],
              inputData[formKey.course],
              inputData[formKey.birth],
            ],
          ],
        },
      });
      console.log(response);
      if (response.status === 200) {
        setMessage("Data submitted successfully");
      } else {
        setMessage("Error submitting data");
      }
    } catch (error) {
      console.error("Error writing to spreadsheet:", error);
      setMessage("Error submitting data");
    }
  };

  const setMessage = (message) => {
    console.log(message);
  };

  return (
    <div>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full p-2 rounded-md text-black"
          name={formKey.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded-md text-black"
          name={formKey.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          placeholder="Số điện thoại"
          className="w-full p-2 rounded-md text-black"
          name={formKey.tel}
          onChange={handleInputChange}
        />
        <select
          className="w-full p-2 rounded-md text-black"
          name={formKey.course}
          onChange={handleInputChange}
        >
          <option>Ngành đào tạo</option>
          <option>An ninh mạng</option>
          <option>Lập trình máy tính</option>
          <option>Thiết kế đồ họa</option>
          <option>Thương mại điện tử</option>
          <option>Quản trị mạng</option>
          <option>CEH</option>
          <option>AWS</option>
        </select>
        <input
          type="date"
          placeholder="Ngày tháng năm sinh"
          className="w-full p-2 rounded-md text-black"
          name={formKey.birth}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full p-2 bg-orange-500 text-white py-2 px-4 rounded-md font-bold animate-floating"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default SheetsForm;
