module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'course',
    {
      name: {
        type: DataTypes.STRING(3072),
        allowNull: false
      },
      courses: {
        type: DataTypes.STRING(3072),
        allowNull: false,
        get: function () {
          return JSON.parse(this.getDataValue('courses'));
        },
        set: function (val) {
          return this.setDataValue('courses', JSON.stringify(val));
        }
      },
      image: { type: DataTypes.STRING(1000), allowNull: true },
      free: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
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
