import { useForm } from "react-hook-form";
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
      } else {
        setMsg(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error:", error);
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        AWS Basic Concept - User Form
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            Phone
          </label>
          <input
            type="text"
            {...register("phone", { required: "Phone is required" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-200"
        >
          Submit
        </button>

        {msg && (
          <p className="mt-4 text-center font-medium text-red-600">{msg}</p>
        )}
      </form>

      <div className="mt-10 w-full max-w-3xl">
        <AllUser />
      </div>
    </div>
  );
}

export default App;
