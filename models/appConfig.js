module.exports = function(sequelize, DataTypes) {
    /**
     * This tabl will save some application configurations
     */
    const AppConfig = sequelize.define("AppConfig", {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        itemValue: {
            type: DataTypes.JSON,
            defaultValue: {}
        }
    });
    return AppConfig;
}