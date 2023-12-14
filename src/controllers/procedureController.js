// procedureController.js

import { createProcedure, getProcedureById, getProcedureList, updateProcedure, deleteProcedure } from '../services/procedureService.js'; // Adjust the path as needed

// Controller function to handle creating a new procedure
export const createProcedureController = async (req) => {
  try {
    const procedureData = req.body;
    const createdProcedure = await createProcedure(procedureData);

    return createdProcedure;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Controller function to handle getting a procedure by ID
export const getProcedureByIdController = async (req) => {
  try {
    const { procedureId } = req.params; // Assuming procedure ID is in the request parameters

    const procedure = await getProcedureById(procedureId);

    if (!procedure) {
      throw Error('Procedure not found');
    }

    return procedure;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Controller function to handle getting the list of procedures
export const getProcedureListController = async () => {
  try {
    const procedures = await getProcedureList();

    return procedures;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Controller function to handle updating a procedure
export const updateProcedureController = async (req) => {
  try {
    const { procedureId } = req.params; // Assuming procedure ID is in the request parameters
    const updatedProcedureData = req.body; // Assuming updated procedure data is sent in the request body
    const updatedProcedure = await updateProcedure(procedureId, updatedProcedureData);

    return updatedProcedure;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Controller function to handle deleting a procedure
export const deleteProcedureController = async (req) => {
  try {
    const { procedureId } = req.params; // Assuming procedure ID is in the request parameters

    await deleteProcedure(procedureId);

    return true; // No content for successful deletion
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Add more controller functions as needed
