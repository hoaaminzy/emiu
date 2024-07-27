const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080; // Sử dụng biến môi trường PORT hoặc mặc định là 8080

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*", // Thay đổi theo yêu cầu bảo mật của bạn
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Nếu bạn cần gửi cookie qua CORS
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "1000mb" })); // Giới hạn kích thước JSON là 10MB
app.use(express.urlencoded({ limit: "1000mb", extended: true })); // Giới hạn kích thước URL-encoded là 10MB
app.use(cookieParser());

app.use("/api", router);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to DB");
      console.log("Server is running on port " + PORT);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1); // Exit process with failure code
  });
