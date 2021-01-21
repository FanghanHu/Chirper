module.exports = function (sequelize, DataTypes) {
    const Table = sequelize.define("Table", {
        tableName: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: {args: [1,160], msg:"tableName length must be between 1 and 160 characters."},
                notEmpty: true,
            }
        },
        x: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        y: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Table.associate = function (models) {
        //link to the user that made this action
        Table.belongsTo(models.TableArea, { foreignKey: { allowNull: false }, onDelete: 'CASCADE'});
        Table.belongsToMany(models.Order, {through: "orderTables"});
    };

    return Table;
};