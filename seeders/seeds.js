const db = require("../models");

db.sequelize.sync({force: true}).then(async () => {

    //setting up the app
    const orderNumber = await db.AppConfig.create({itemName: "next order number", itemValue: 1});

    //create user John Doe
    const john = await db.User.create({
        fullName: "John Doe",
        accessCode: 0,
        isManager: true,
        username: "username",
        password: "password"
    });

    const mainMenu = await db.Menu.create({
        menuName: "Main Menu",
        Items: [
            {
                itemName: "Big Mac",
                price: 3.25
            }
        ]
    }, {
        include: [db.Item]
    });

    const orderItem = {
        ...mainMenu.Items[0].dataValues,
        serverId: john.id,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    db.Order.create({
        orderNumber: "#" + orderNumber.itemValue,
        creatorId: john.id,
        items: [orderItem],
        Payments: [
            {
                amount: 3.0,
            }
        ]
    }, {
        include: [db.Payment, "creator"]
    })
});