module.exports = function(sequelize, DataTypes) {
    var food = sequelize.define("food", {
      name_food: {
        type: DataTypes.STRING,
        allowNull: false
      },
      recipe: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    // if user is deleted, the food with reference gets deleted.
    food.associate = function(models) {
        food.belongsTo(models.user, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: "cascade",     
        });
    }

    return food;
};
