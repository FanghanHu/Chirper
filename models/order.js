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
        }
    });

    Order.associate = function (models) {
        Order.belongsTo(models.User, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT', as: "creator"});
        Order.hasMany(models.Payment);
        Order.hasMany(models.OrderItem);
        Order.belongsToMany(models.Log, {onDelete: 'CASCADE ', foreignKey: {name:"orderId", allowNull: false }, through: "orderLogs"});
    };

    return Order;
};