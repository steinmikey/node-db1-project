const router = require("express").Router();
const Account = require("./accounts-model");
const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require("./accounts-middleware");

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
