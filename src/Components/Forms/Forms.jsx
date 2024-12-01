import { message } from 'antd';
import './Forms.css';
import axios from 'axios';
import { useState } from 'react';

const Forms = () => {
  const [loading, setLoading] = useState(false);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+998\d{9}$/; // +998 bilan boshlanib, 9 ta raqam kiritilishi kerak
    return phoneRegex.test(phone);
  };

  const SendMessage = (event) => {
    event.preventDefault();
    setLoading(true);

    const token = "6887615421:AAH1YIJJvatolq6qpSaTBdzV9pZAG-OK0jc";
    const chat_id = -1002073716537;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (!validatePhoneNumber(phone)) {
      message.error("Telefon raqami formati noto'g'ri! Format: +998XXXXXXXXX");
      setLoading(false);
      return;
    }

    const sendMessageContent = `Ismi: ${name}\nTelefon raqami: ${phone}`;

    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chat_id,
        "text": sendMessageContent,
      }
    })
      .then((res) => {
        message.success("Muvaffaqiyatli yuborildi!");
        document.getElementById("myForm").reset();
      })
      .catch((err) => {
        message.error("Xatolik yuz berdi! Qayta urinib ko'ring.");
        console.error("Yuborishda xatolik:", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className='form'>
      <div className='container'>
        <div className="form-left">
          <h3 className='form-title'>Biz bilan bog'laning!</h3>
          <form className='form-inputs' id="myForm" onSubmit={SendMessage}>
            <label className='form-label'>Ismingizni Kiriting:</label>
            <input placeholder='Azamatov Ahror' type="text" className='form-input' id="name" required />
            <label className='form-label'>Telefon raqamingizni kiriting:</label>
            <input
              placeholder='+998XXXXXXXXX'
              type="text"
              className='form-number'
              id="phone"
              required
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9+]/g, '')} // Harf va belgilarni olib tashlaydi
              pattern="^\+998\d{9}$" // HTML orqali qo'shimcha validatsiya
            />
            <button className='form-button' type="submit" disabled={loading}>
              {loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
