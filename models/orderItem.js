module.exports = function(sequelize, DataTypes) {
    /**
     * The orderItem represents an item related to an order, it holds it's own data instead of referring to an Item
     * because Item may hav its properties changed anytime, and changing some properties on an Item after it's been 
     * ordered doesn't make sense. OrderItem keeps the properties even if the original Item changed.
     */
    const OrderItem = sequelize.define("OrderItem", {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {args: [1,160], msg:"name length must be between 1 and 160 characters."},
                notEmpty: true,
            }
        },
        price: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        tax: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "OPEN"
        }
        //TODO: add modifiers and maybe even more stuff via migration
    });

    OrderItem.associate = function (models) {
        //keep a link to the original Item
        OrderItem.belongsTo(models.Item, {onDelete: 'SET NULL'});


        OrderItem.belongsTo(models.User, {onDelete: 'RESTRICT', as: "server", foreignKey: { allowNull: false }});

        //must link to an Order
        OrderItem.belongsTo(models.Order, {onDelete: 'CASCADE ', foreignKey: { allowNull: false }});

        //can have many Logs
        OrderItem.belongsToMany(models.Log, {onDelete: 'CASCADE ', foreignKey: { name: "orderItemId", allowNull: false }, through: "orderItemLogs"});
    };

    return OrderItem;
}