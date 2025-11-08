// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use("/api/auth", require("./routes/auth")); 
// app.use("/api", require("./routes/sensor"));   // Sensor routes
// const relayRoutes = require('./routes/relay');
// app.use('/api/relay', relayRoutes);

// // Health check route
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(5000, '0.0.0.0', () => console.log('✅ Server running on http://0.0.0.0:5000'));



require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ====== Middleware ======
app.use(cors());
app.use(express.json());

// ====== MongoDB Connection ======
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ====== Routes ======
app.use("/api/auth", require("./routes/auth"));
app.use("/api", require("./routes/sensor"));
app.use("/api/relay", require("./routes/relay"));

// ====== Health Check Route ======
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ====== Start Server ======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
