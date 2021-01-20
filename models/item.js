const { BelongsTo } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    const Item = sequelize.define("Item", {
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
        }
    });

    Item.associate = function (models) {
        Item.BelongsToMany(models.Menu, {through: "menuItems"});
    };

    return Item;
}