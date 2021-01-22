module.exports = function (sequelize, DataTypes) {
    const Payment = sequelize.define("Payment", {
        amount: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "CASH",
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "OPEN"
        }
    });

    Payment.associate = function (models) {
        Payment.belongsTo(models.Order, {foreignKey: { allowNull: false }, onDelete: 'RESTRICT'});
        Payment.belongsTo(models.User, {foreignKey: { allowNull: false }, onDelete: 'RESTRICT', as: "cashier"});
        Payment.belongsToMany(models.Log, {onDelete: 'CASCADE ', foreignKey: { name: "paymentId", allowNull: false }, through: "paymentLogs"});
    };

    return Payment;
};