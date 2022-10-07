const { response } = require("express");
const express = require("express");
const router = express.Router();

const controller = require("../controller/bestSeller.controller");
const middleware = require("../middleware/multer.middleware");

router.get("/get_best_seller", controller.get_best_seller);
router.put("/put_best_seller", middleware, controller.put_best_seller);
router.post("/post_best_seller", middleware, controller.post_best_seller);
router.delete("/delete_best_seller", controller.delete_best_seller);
