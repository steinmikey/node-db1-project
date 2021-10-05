const router = require("express").Router();
const Account = require("./accounts-model");
const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id);
    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.post("/", checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", checkAccountId, checkAccountPayload, (req, res, next) => {
  try {
    Account.updateById(req.params.id, req.body);
    res.json(req.body);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", checkAccountId, async (req, res, next) => {
  try {
    const deletedAccount = await Account.deleteById(req.params.id);
    res.json(deletedAccount);
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line
router.use((err, req, res, _next) => {
  res.status(err.status || 500).json({
    message: err.message || "server error"
  });
});

module.exports = router;
