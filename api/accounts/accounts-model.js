const db = require("../../data/db-config");

const getAll = () => {
  // SELECT * FROM accounts;
  return db("accounts");
};

const getById = (id) => {
  // SELECT * FROM accounts WHERE (id = 2);
  return db("accounts").where("id", id).first();
};

const create = async (newAccount) => {
  // INSERT INTO accounts (name, budget)
  // VALUES ('new name', 2000);
  const [id] = await db("accounts").insert(newAccount);
  return getById(id);
};

const updateById = async (id, changes) => {
  // UPDATE accounts
  // SET name = 'newer name', budget = 3000
  // WHERE id = 14;

  await db("accounts").update(changes).where("id", id);
  return getById(id);
};

const deleteById = async (id) => {
  // DELETE FROM accounts
  // WHERE id = 14;
  const deletedAccount = await getById(id);
  await db("accounts").where("id", id).delete();
  return deletedAccount;
};

const checkName = (name) => {
  return db("accounts").where("name", name).first();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  checkName
};
