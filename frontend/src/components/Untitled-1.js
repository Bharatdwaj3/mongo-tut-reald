import React, { useState } from "react";
import axios from "axios";

export default function CreateCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");
  const [booked, setBooked] = useState(false);

  const onChangeName = (e) => {
    setName({ name: e.target.value });
  };
  const onChangeEmail = (e) => {
    setEmail({ email: e.target.value });
  };
  const onChangePhone = (e) => {
    setPhone({ phone: e.target.value });
  };
  const onChangePassport = (e) => {
    setPassport({ passport: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      name: name,
      email: email,
      phone: phone,
      passport: passport,
    };
    console.log(bookingData);

    axios
      .post("http://localhost:5000/customers", bookingData)
      .then((res) => {
        console.log(res.data);
        setName(name);
        setEmail(email);
        setPhone(phone);
        setPassport(passport);
      })
      .catch((error) => {
        console.log(error);
      });
    setBooked(true);
  };

  return (
    <div>
      {booked ? (
        <p className="bookedMsg">Your room was booked successfully!!!</p>
      ) : (
        <form onSubmit={onSubmit} className="form contact-form">
          <div className="input-group-wrap">
            <div className="input-group">
              <input
                className="input"
                type="text"
                onChange={onChangeName}
                placeholder="Name..."
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <input
                className="input"
                type="email"
                onChange={onChangeEmail}
                placeholder="Email..."
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <input
                onChange={onChangePhone}
                type="number"
                className="input"
                placeholder="Phone..."
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <input
                onChange={onChangePassport}
                type="number"
                className="input"
                placeholder="Passport..."
                required
              />
              <span className="bar"></span>
            </div>
          </div>
          <button type="submit" className="btn form-btn btn-purple">
            BOOK NOW
            <span className="dots">
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </button>
        </form>
      )}
    </div>
  );
}