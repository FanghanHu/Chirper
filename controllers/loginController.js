const db = require("../models");

module.exports = {
    loginWithAccessCode: function(req, res) {
        db.User
        .findAll({where: {
            accessCode: req.body.accessCode
        }})
        .then(results => {
            if(results.length === 1) {
                return res.json({
                    id: results[0].id,
                    fullName: results[0].fullName,
                    isManager: results[0].isManager
                });
            } else {
                res.status(404).send("Access Denied!");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
    }
}