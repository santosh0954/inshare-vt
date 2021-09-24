const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");

connectDB();

const filesRoute = require("./routes/files");
const showRoute = require("./routes/show");
const downloadRoute = require("./routes/download");

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/files", filesRoute);
app.use("/files", showRoute);
app.use("/files/download", downloadRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
