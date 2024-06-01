// src/components/Form.js
import { useState } from 'react';
import { useMutation } from 'react-query';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'anm',
  });

  const mutation = useMutation(newRegistration => {
    return fetch('https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1!A1:append?valueInputOption=USER_ENTERED', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [
          [newRegistration.name, newRegistration.phone, newRegistration.email, newRegistration.course],
        ],
      }),
    });
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Họ tên" value={formData.name} onChange={handleChange} className="block mb-2 p-2 border" />
      <input name="phone" type="text" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} className="block mb-2 p-2 border" />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block mb-2 p-2 border" />
      <select name="course" value={formData.course} onChange={handleChange} className="block mb-2 p-2 border">
        <option value="anm">ANM</option>
        <option value="ltmt">LTMT</option>
        <option value="tkdh">TKDH</option>
        <option value="aws">AWS</option>
        <option value="ceh">CEH</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Submit</button>
    </form>
  );
};

export default Form;
