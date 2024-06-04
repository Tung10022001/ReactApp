// src/SheetsForm.js
import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import { GoogleSheetInfo } from "../constants/google-sheet-info";

const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];

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
    gapi.load("client:auth2", initClient);
  }, []);

  const initClient = () => {
    gapi.client
      .init({
        apiKey: GoogleSheetInfo.api_key,
        clientId: GoogleSheetInfo.client_id,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPE,
      })
      .then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(setSigninStatus);
        setSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
  };

  const setSigninStatus = (isSignedIn) => {
    setIsSignedIn(isSignedIn);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isSignedIn) {
      console.log("You need to sign in to submit data");
      return;
    }
    const params = {
      spreadsheetId: GoogleSheetInfo.spreadsheet_id,
      range: "Application",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
    };
    const valueRangeBody = {
      values: [
        [
          inputData[formKey.name],
          inputData[formKey.email],
          inputData[formKey.tel],
          inputData[formKey.course],
          inputData[formKey.birth],
        ],
      ],
    };
    console.log(valueRangeBody);
    gapi.client.sheets.spreadsheets.values
      .append(params, valueRangeBody)
      .then((response) => {
        console.log(response.result);
      })
      .catch((error) => console.log(error));
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
          disabled={!isSignedIn}
        >
          Đăng ký
        </button>
      </form>
      <div className="mt-2">
        {!isSignedIn && (
          <button onClick={() => gapi.auth2.getAuthInstance().signIn()}>
            Sign In
          </button>
        )}
        {isSignedIn && (
          <button onClick={() => gapi.auth2.getAuthInstance().signOut()}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default SheetsForm;
