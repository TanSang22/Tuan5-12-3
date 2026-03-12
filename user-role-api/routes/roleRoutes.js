const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const userController = require("../controllers/userController");

router.post("/",roleController.createRole);

router.get("/",roleController.getRoles);

router.get("/:id",roleController.getRoleById);

router.get("/:id/users",userController.getUsersByRole);

module.exports = router;