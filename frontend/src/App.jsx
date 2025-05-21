import { useForm } from "react-hook-form";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import AllUser from "./AllUser";

function App() {
  const [msg, setMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/user", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        setMsg(res.data.message);
      }else{
       setMsg(res.data.message);
       console.log(res.data)
      }
    } catch (error) {
      console.error("Error:", error);
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1>This is AWS basic concept</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <button type="submit">Submit</button>
        <h2 style={{ color: "red" }}>{msg}</h2>
      </form>

      <div>
        <AllUser/>
      </div>
    </div>
  );
}

export default App;
