const db = require("../models");

async function resetDB() {
    //reset the database
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await db.sequelize.sync({ force: true });
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    //setting up the app
    const orderNumber = await db.AppConfig.create({ itemName: "next order number", itemValue: 2 });

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
                price: 3.25,
                tax: 0.0825
            }
        ]
    }, {
        include: [db.Item]
    });


    const order = await db.Order.create({
        orderNumber: "#1",
        creatorId: john.id
    });

    await order.createOrderItem({
        itemName:"cheese burger",
        price: 5.25,
        tax: 0.0825,
        serverId: john.id
    });

    await order.createPayment({
        amount: 5,
        type: "CASH",
        cashierId: john.id
    });
}

resetDB();
