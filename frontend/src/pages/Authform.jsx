// AuthForm.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ type, onSuccessRedirect }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const response = await axios.post(`/${type}`, {
        name,
        email,
        password,
      });

      console.log("Response:", response);

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          name: "",
          email: "",
          password: "",
        });
        toast.success(`${type === "register" ? "Registration" : "Login"} successful. Welcome, ${name || ''}`);
        console.log(`Redirecting to ${onSuccessRedirect}`);
        navigate(onSuccessRedirect);
      }
    } catch (error) {
      console.error(`Error during ${type}:`, error);

      // Display a generic error message
      toast.error(`An error occurred during ${type}. Please try again.`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {type === "register" && (
          <>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </>
        )}
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
