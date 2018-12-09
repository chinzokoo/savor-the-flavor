module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  user.associate = function(models) {
    user.hasMany(models.food, {
      // onDelete: "cascade",
    });
  };

  return user;
};
