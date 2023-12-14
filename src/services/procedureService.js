// procedureService.js

// import ProcedureModel from '../models/procedureModel'; // Adjust the path as needed
import { createPatient, getPatientById } from './patientService.js'; // Adjust the path as needed

const procedureList = [];

// Function to create a new procedure
export const createProcedure = async (procedureData) => {
  try {
    // Generate a procedure ID based on the index of the procedure
    const procedureId = `PROC-${procedureList.length + 1}`;
     // Fetch a random user from the API
     const fakeDoctorResponse = await fetch('https://randomuser.me/api/');
     const fakeDoctor = await fakeDoctorResponse.json();
     // Extract the doctor's name from the response
     const doctorName = `${fakeDoctor.results[0].name.first} ${fakeDoctor.results[0].name.last}`;

    // Create a new procedure object with the generated ID
    const newProcedure = {
      ...procedureData,
      createdAt: new Date(),
      personnel: doctorName,
      id: procedureId,
      room: 'Room 1',
      status: 'pending',
    };

    // Extract patient details from procedureData
    const { patient: patientData, ...rest } = procedureData;

    // Check if patient ID is provided
    if (patientData.id) {
      // Use existing patient
      const patient = await getPatientById(patientData.id);

      if (!patient) {
        throw new Error('Patient not found');
      }

      // Use the existing patient's details
      newProcedure.patient = { ...patient, id: patientData.id };
    } else {
      // Create a new patient
      const newPatient = await createPatient(patientData);

      // Use the details of the newly created patient
      newProcedure.patient = { ...newPatient, id: newPatient.id };
    }

    // For temporary storage in a JavaScript list
    procedureList.push(newProcedure);

    // For future use with MongoDB
    /* const procedure = new ProcedureModel(procedureData);
    const savedProcedure = await procedure.save();
    return savedProcedure; */

    // Returning the procedure data for immediate use
    return newProcedure;
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


export const getProcedureList = async () => {
    try {
        return procedureList;
      } catch (error) {
        throw error;
      }
}

export const updateProcedure = async (procedureId, updatedValue) => {

    try {
        // For future use with MongoDB
        // const procedure = await ProcedureModel.findById(procedureId);
    
        // For temporary use with the JavaScript list
        procedureList = procedureList.map((value) => {
            if (value.id === procedureId) {
                return updatedValue;
            }
            return value;
        });
    
        return updatedValue;
      } catch (error) {
        throw error;
      }  

};

export const deleteProcedure = async (procedureId) => {
    try {
      // For future use with MongoDB
      // const procedure = await ProcedureModel.findById(procedureId);
  
      // For temporary use with the JavaScript list
      procedureList = procedureList.filter(value => value.id !== procedureId);
  
      return 'done';
    } catch (error) {
      throw error;
    }
  };

// Add more functions as needed (update, delete, find by patient ID, etc.)
