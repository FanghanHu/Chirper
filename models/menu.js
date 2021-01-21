module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define("Menu", {
        menuName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {args: [1,160], msg:"name length must be between 1 and 160 characters."},
                notEmpty: true,
            }
        }
    });

    Menu.associate = function (models) {
        Menu.belongsToMany(models.Item, {through: "menuItems"});
    };

    return Menu;
}