module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
        fullName: {
            type: DataTypes.STRING,
            validate: {
                len: {args: [1,160], msg:"name length must be between 1 and 160 characters."},
                notEmpty: true,
            }
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
                len: {args: [0,160], msg:"phone length must be between 0 and 160 characters."}
            }
        },
        address: {
            type: DataTypes.STRING,
            validate: {
                len: {args: [0,160], msg:"address length must be between 0 and 160 characters."}
            }
        },
        city: {
            type: DataTypes.STRING,
            validate: {
                len: {args: [0,160], msg:"city length must be between 0 and 160 characters."}
            }
        },
        state: {
            type: DataTypes.STRING,
            validate: {
                len: {args: [0,160], msg:"state length must be between 0 and 160 characters."}
            }
        },
        zip: {
            type: DataTypes.STRING,
            validate: {
                len: {args: [0,20], msg:"zip length must be between 0 and 20 characters."}
            }
        },
        note: {
            type: DataTypes.STRING,
            validate: {
                len: {args: [0,600], msg:"note length must be between 0 and 600 characters."}
            }
        }
    });

    Customer.associate = function (models) {
        Customer.belongsToMany(models.Order, {through: "customerOrders"});
    };


    return Customer;
}