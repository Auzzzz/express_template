const { DataTypes } = require("sequelize");
const db = require("../../models");
// const user = require("../../models/user")(db.sequelize, DataTypes);
// const company = require("../../models/company")(db.sequelize, DataTypes);

// Select all posts from the database.
exports.test = async (req, res) => {
  const user_test = await db.User.findAll();
  const company_test = await db.Company.findAll();

  // Can use eager loading to join tables if needed, for example:
  // const posts = await db.post.findAll({ include: db.user });

  // Learn more about eager loading here: https://sequelize.org/master/manual/eager-loading.html
  console.log(user_test, company_test)
  res.status(200).json(user_test);
};