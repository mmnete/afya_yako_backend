// userService.js

// import UserModel from '../models/userModel'; 

const userList = [];

// Function to create a new user
export const createUser = async (userData) => {
  try {
    const userId = `USER-${userList.length + 1}`;

    // Create a new procedure object with the generated ID
    const newUser = {
      ...userData,
      id: userId,
    };

    userList.push(newUser);
    return newUser;
  } catch (error) {
    throw error; // Handle the error as per your application's needs
  }
};

// Function to get a user by ID
export const getUserById = async (userId) => {
  try {
    // For future use with MongoDB
    // const user = await UserModel.findById(userId);

    // For temporary use with the JavaScript list
    const user = userList.find((u) => u.id === userId);

    return user;
  } catch (error) {
    throw error;
  }
};

// Add more functions as needed (update, delete, find by email, etc.)
