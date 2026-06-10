// const path = require("path");
// require("dotenv").config({ path: path.join(__dirname, "../.env") });

// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "postgres",
//   }
// );

// const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Database connection failed:", error.message);
//   }
// };

// connectDB();

// module.exports = sequelize;

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});

module.exports = pool;