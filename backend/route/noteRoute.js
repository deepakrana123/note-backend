const express = require("express");
const {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
  getHello
} = require("../controller/noteController.js");
const router = express.Router();
const { protect } =  require("../middleware/authMiddleware.js");
// const { get } = require("./userRoute.js");

router.route("/").get(protect , getNotes)
router.route('/value').get((req,res)=>{
  console.log("how are you")
  res.send("how")
});
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect , CreateNote);

module.exports = router;