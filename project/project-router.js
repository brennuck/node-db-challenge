const express = require("express");

const Project = require("./project-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const found = await Project.getProjects();
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(404).json("No project to display");
    }
  } catch {
    res.status(500).json("Database Error");
  }
});

router.get("/:id/tasks", (req, res) => {
  Project.getTasks(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    });
});

router.get("/:id/resources", (req, res) => {
  Project.getResources(req.params.id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    });
});

module.exports = router;