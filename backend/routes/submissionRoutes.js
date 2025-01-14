import express from "express";
import AuthMiddleware from "../middleware/auth.js";
import Submission from "../models/submissionModel.js";

const router = express.Router();

router.post("/", AuthMiddleware, async (req, res) => {
  try {
    const newSubmission = new Submission({ ...req.body, userId: req.user.id });

    const savedSubmission = await newSubmission.save();

    res.status(201).json(savedSubmission);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/:id", AuthMiddleware, async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        error: "Submission not found",
      });
    }

    if (submission.userId !== req.user.id) {
      return res.status(403).json({
        error: "Access Denied",
      });
    }

    const updatedSubmission = await Submission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedSubmission);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    });
  }
});

router.delete("/:id", AuthMiddleware, async (req, res) => {
  try {
    console.log("Request received with ID:", req.params.id);
    console.log("User authenticated as:", req.user.id);
    const submission = await Submission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        error: "Submission not found",
      });
    }

    if (submission.userId !== req.user.id) {
      return res.status(403).json({
        error: "Access Denied",
      });
    }

    await Submission.findByIdAndDelete(req.params.id);

    res.json({
      message: "Submission Deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    });
  }
});

export default router;
