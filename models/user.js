module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {args: [1,160], msg:"name length must be between 1 and 160 characters."},
                notEmpty: true,
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: {args: [6,160], msg:"username length must be between 6 and 160 characters."},
                notEmpty: true,
                isAlphanumeric: {msg:"username must be alphanumerical."}
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: {args: [8,160], msg:"password length must be between 8 and 160 characters."},
            }
        },
        accessCode: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: {args: [1,160], msg:"access code length must be between 1 and 160 characters."},
            }
        },
        isManager: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return User;
}