import { User } from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Check for required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    // Create new user
    const newUser = await User.create({ name, email, phone });

    return res.status(201).json({
      message: "Registered successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Registration Error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};


export const allUser = async(req,res)=>{
  try {
      const users = await User.find()
      return res.status(200).json({
        
        data: users,
      });

  } catch (error) {
    console.error("Registration Error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}