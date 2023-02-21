const express = require("express");

const router = express.Router();

const imageControllers = require("./controllers/imageControllers");

router.get("/image", imageControllers.browse);
router.get("/image/:id", imageControllers.read);
router.put("/image/:id", imageControllers.edit);
router.post("/image", imageControllers.add);
router.delete("/image/:id", imageControllers.destroy);

module.exports = router;
