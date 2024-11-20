import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [Address, setAddress] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://ewaste-ueo4.onrender.com",
        {
          name,
          email,
          city,
          Address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setAddress("");
        setCity("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>PCCOE, Pune</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91 1234567890</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>ngo@gmail.com</p>
          </div>
        </div>
        <div className="banner">
        
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <textarea
                rows={5}
                placeholder="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
