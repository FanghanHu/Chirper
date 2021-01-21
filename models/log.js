module.exports = function (sequelize, DataTypes) {
    const Log = sequelize.define("Log", {
        action: {
            type: DataTypes.STRING,
        },
        payload: {
            type: DataTypes.JSON
        } 
    });

    Log.associate = function (models) {
        //link to the user that made this action
        Log.belongsTo(models.User, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT'});
    };

    return Log;
};