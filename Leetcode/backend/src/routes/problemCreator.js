const express=require('express');
const { get } = require('http');

const problemRouter=express.Router();

//  Create
problemRouter.post('/create',problemCreate);
//update
problemRouter.patch(":/id",problemUpdate);
//delete
problemRouter.delete("/:id",problemDelete);
//fetch
problemRouter.get("/:id",problemFetch);
//fetch all
problemRouter.get("/",getAllProblem);
//solved problem
problemRouter.get("/user",solvedProblem);