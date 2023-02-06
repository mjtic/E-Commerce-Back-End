const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// Create a new Sequelize model for Category
class Category extends Model {}
 // Define fields/columns on model
// An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
