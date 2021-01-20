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
        }
    });

    Payment.associate = function (models) {
        Payment.belongsTo(models.Order, {foreignKey: { allowNull: false }, onDelete: 'RESTRICT'});
        Payment.belongsTo(models.User, {foreignKey: { allowNull: false }, onDelete: 'RESTRICT', as: "cashier"});
    };

    return Payment;
};