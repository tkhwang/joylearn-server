module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'instructor',
    {
      name: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      fullName: { type: DataTypes.STRING(255), allowNull: true },
      gitHub: { type: DataTypes.STRING(1024), allowNull: true },
      mainUrl: { type: DataTypes.STRING(1024), allowNull: true },
      image: { type: DataTypes.STRING(1024), allowNull: true },
      lang: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'eng'
      },
      review: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
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
