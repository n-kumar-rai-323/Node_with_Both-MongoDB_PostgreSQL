const pool = require("../config/pg.db");

const create = async (name, price) => {
  const result = await pool.query(
    "INSERT INTO products(name, price) VALUES($1,$2) RETURNING *",
    [name, price]
  );

  return result.rows[0];
};

const findAll = async () => {
  const result = await pool.query(
    "SELECT * FROM products ORDER BY id"
  );

  return result.rows;
};

const findById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE id=$1",
    [id]
  );

  return result.rows[0];
};

const update = async (id, name, price) => {
  const result = await pool.query(
    "UPDATE products SET name=$1, price=$2 WHERE id=$3 RETURNING *",
    [name, price, id]
  );

  return result.rows[0];
};

const remove = async (id) => {
  await pool.query(
    "DELETE FROM products WHERE id=$1",
    [id]
  );
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};