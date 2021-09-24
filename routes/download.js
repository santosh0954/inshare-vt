const router = require("express").Router();
const File = require("../models/files");

router.get("/:uuid", async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  if (!file) {
    return res.render("download", { error: "Link has expired" });
  }
  const filePath = `${__dirname}/../${file.path}`;
  console.log(filePath);
  res.download(filePath);
});

module.exports = router;
