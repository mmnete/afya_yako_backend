// procedureService.js

// import ProcedureModel from '../models/procedureModel'; // Adjust the path as needed
import { createUser } from './userService.js'; // Adjust the path as needed

const procedureList = [];

// Function to create a new procedure
export const createProcedure = async (procedureData) => {
  try {
    // Extract patient details from procedureData
    const { patient: patientData, ...rest } = procedureData;

    // Check if patient ID is provided
    if (patientData.id) {
      // Use existing patient
      const patient = await getUserById(patientData.id);

      if (!patient) {
        throw new Error('Patient not found');
      }

      // Use the existing patient's details
      procedureData.patient = { ...patient, id: patientData.id };
    } else {
      // Create a new patient
      const newPatient = await createUser(patientData);

      // Use the details of the newly created patient
      procedureData.patient = { ...newPatient, id: newPatient.id };
    }

    // For temporary storage in a JavaScript list
    procedureList.push(procedureData);

    // For future use with MongoDB
    /* const procedure = new ProcedureModel(procedureData);
    const savedProcedure = await procedure.save();
    return savedProcedure; */

    // Returning the procedure data for immediate use
    return procedureData;
  } catch (error) {
    throw error; // Handle the error as per your application's needs
  }
};

// Function to get a procedure by ID
export const getProcedureById = async (procedureId) => {
  try {
    // For future use with MongoDB
    // const procedure = await ProcedureModel.findById(procedureId);

    // For temporary use with the JavaScript list
    const procedure = procedureList.find((p) => p.id === procedureId);

    return procedure;
  } catch (error) {
    throw error;
  }
};

// Add more functions as needed (update, delete, find by patient ID, etc.)
