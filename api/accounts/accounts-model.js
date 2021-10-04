const getAll = () => {
  // SELECT * FROM accounts;
};

const getById = (id) => {
  // SELECT * FROM accounts WHERE (id = 2);
};

const create = (account) => {
  // INSERT INTO accounts (name, budget)
  // VALUES ('new name', 2000);
};

const updateById = (id, account) => {
  // UPDATE accounts
  // SET
  // name = 'newer name',
  // budget = 3000
  // WHERE id = 14;
};

const deleteById = (id) => {
  // DELETE FROM accounts
  // WHERE id = 14;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
