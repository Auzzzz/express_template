module.exports = (express, app) => {
    const controller = require("../controllers/test.controller.js");
    const router = express.Router();
  
    // Test Route
    router.get("/", controller.test);
  
    app.use("/", router)
  };
  