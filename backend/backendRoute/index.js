const express=require('express');

const router = express.Router();
const ServiceCompiler = require("../compiler/ServiceCompiler");
router.post('/api/plan-list',ServiceCompiler.generateToken);

module.exports=router;