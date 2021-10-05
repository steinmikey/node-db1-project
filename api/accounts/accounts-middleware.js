const yup = require("yup");
const Account = require("./accounts-model");

const payloadSchema = yup.object().shape({
  name: yup
    .string("name of account must be a string")
    .typeError("name of account must be a string")
    .trim()
    .required("name and budget are required")
    .min(3, "name of account must be between 3 and 100")
    .max(100, "name of account must be between 3 and 100"),
  budget: yup
    .number("budget of account must be a number")
    .typeError("budget of account must be a number")
    .required("name and budget are required")
    .min(0, "budget of account is too large or too small")
    .max(1000000, "budget of account is too large or too small")
});

const checkAccountPayload = async (req, res, next) => {
  try {
    const validated = await payloadSchema.validate(req.body, { strict: true });
    req.body = validated;
    next();
  } catch (error) {
    next({ status: 400, message: error.message });
  }
};

const checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkAccountId = async (req, res, next) => {
  try {
    const data = await Account.getById(req.params.id);
    console.log(data);

    if (data) {
      req.account = data;
      next();
    } else {
      next({ status: 404, message: "account not found" });
    }
  } catch (error) {
    next({ status: 404, message: "account not found" });
  }
};

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
};
