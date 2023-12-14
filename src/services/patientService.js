// import UserModel from '../models/userModel'; 

const patientList = [];

// Function to create a new user
export const createPatient = async (patientData) => {
  try {
    const patientId = `USER-${patientList.length + 1}`;

    // Create a new procedure object with the generated ID
    const newPatient = {
      ...patientData,
      id: patientId,
    };

    patientList.push(newPatient);
    return newPatient;
  } catch (error) {
    throw error; // Handle the error as per your application's needs
  }
};

// Function to get a user by ID
export const getPatientById = async (id) => {
  try {
    // For future use with MongoDB
    // const user = await UserModel.findById(userId);

    // For temporary use with the JavaScript list
    const patient = patientList.find((u) => u.id === id);

    return patient;
  } catch (error) {
    throw error;
  }
};

// Add more functions as needed (update, delete, find by email, etc.)
