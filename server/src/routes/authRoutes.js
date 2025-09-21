// // import express from "express";
// // import { register, login } from "../controllers/authController.js";

// // const router = express.Router();

// // // POST /api/auth/register
// // router.post("/register", register);

// // // POST /api/auth/login
// // router.post("/login", login);

// // export default router;

// import express from "express";
// import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Register
// router.post("/register", registerUser);

// // Login
// router.post("/login", loginUser);

// // Get Profile (protected)
// router.get("/profile", protect, getProfile);

// export default router;


import express from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get Profile (protected)
router.get("/profile", protect, getProfile);

export default router;
