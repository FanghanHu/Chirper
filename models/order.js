module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define("Order", {
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "OPEN"
        },
        items: {
            type: DataTypes.JSON,
            defaultValue: []
        }
    });

    Order.associate = function (models) {
        Order.hasOne(models.User, {allowNull: false, as: "creator"});
        Order.hasMany(models.Payment);
    };

    return Order;
};