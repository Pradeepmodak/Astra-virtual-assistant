const express=require('express');
const problemRouter=express.Router();
const adminMiddleware=require("../middleware/adminMiddleware");

//  Create
problemRouter.post('/create',createProblem);
//update
problemRouter.patch(":/id",updateProblem);
//delete
problemRouter.delete("/:id",deleteProblem);
//fetch
problemRouter.get("/:id",getProblemById);
//fetch all
problemRouter.get("/",getAllProblem);
//solved problem
problemRouter.get("/user",solvedProblemByUser);