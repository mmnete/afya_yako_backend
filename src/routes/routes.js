// routes.js

import express from "express";
import {
  createProcedureController,
  getProcedureByIdController,
  updateProcedureController,
  deleteProcedureController,
  getProcedureListController,
} from "../controllers/procedureController.js"; // Adjust the path as needed

const router = express.Router();

// Create a new procedure
router.post("/create_procedure", async (req, res) => {
  try {
    const procedure = await createProcedureController(req);
    res.setHeader("Content-Type", "application/json"); // Set Content-Type header
    res.status(201).json(procedure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a procedure by ID
router.get("/procedure/:procedureId", async (req, res) => {
  try {
    const procedure = await getProcedureByIdController(req);
    if (!procedure) {
      res.status(404).json({ error: "Procedure not found" });
    } else {
        res.setHeader("Content-Type", "application/json"); // Set Content-Type header
        res.status(201).json(procedure);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a procedure
router.put("/procedure/:procedureId", async (req, res) => {
  try {
    const updatedProcedure = await updateProcedureController(req);
    res.setHeader("Content-Type", "application/json"); // Set Content-Type header
    res.status(201).json(updatedProcedure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a procedure
router.delete("/procedure/:procedureId", async (req, res) => {
  try {
    await deleteProcedureController(req);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all procedures
router.get("/procedures", async (req, res) => {
  try {
    const procedures = await getProcedureListController();
    res.setHeader("Content-Type", "application/json"); // Set Content-Type header
    res.status(201).json(procedures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", (req, res) => {
  res.send("Afya bora is live!");
});

router.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };

  res.send(status);
});

export default router;
