module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'comment',
    {
      comment: { type: DataTypes.STRING(255), allowNull: true }
    },
    {
      timestamp: true,
      paranoid: true,
      underscored: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  );
};