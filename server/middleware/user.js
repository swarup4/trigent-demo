require('dotenv').config();
const jwt = require("jsonwebtoken");

// const config = require('../helper/config');
const User = require('../modules/user/models');
// const Admin = require('../modules/admin/models');

let loginObj = {
    getUserInfo: (req, res, next) => {
        const id = req.params.id;
        const type = req.params.type;
        let obj = { "fname": 1 };
        if (type == "email") {
            obj.email = 1;
        } else {
            obj.phone = 1;
        }

        User.Auth.findById(id, obj, (err, data) => {
            if (err) {
                res.send(err.message);
            } else {
                console.log(data);
                req.data = data;
                next();
            }
        })
    },

    generateSecurityCode: () => {
        return Math.floor(Math.random() * 8999 + 1000);
    },

    // Check Username for User is Exist or Not. & Also Check User Status.
    // Params Or Object : Username
    checkExestingUser: async (req, res, next) => {
        try {
            let obj = req.body;
            let conObj;
            if ('email' in obj) {
                conObj = { email: obj.email };
            } else {
                conObj = { phone: obj.phone };
            }
            let data = await User.Auth.findOne(conObj);
            if (data) {
                let emailMsg = "", userMsg = "";
                if (data.email == obj.email) {
                    emailMsg = "Email is Already Exist.";
                }
                if (data.phone == obj.phone) {
                    userMsg = "Phone is Already Exist.";
                }
                res.send(emailMsg + " " + userMsg);
            } else {
                next();
            }
        } catch (err) {
            res.send(err.message);
        }

    },

    // Check Username for User is Exist or Not. & Also Check User Status.
    // Params Or Object : Username
    // checkExestingAdmin: (req, res, next) => {
    //     let obj = req.body;
    //     let conObj;
    //     if ('email' in obj) {
    //         conObj = { email: obj.email };
    //     } else {
    //         conObj = { phone: obj.phone };
    //     }
    //     Admin.Auth.findOne(conObj, (err, data) => {
    //         if (err) {
    //             res.send(err.message);
    //         } else {
    //             if (data) {
    //                 let emailMsg = "", userMsg = "";
    //                 if (data.email == obj.email) {
    //                     emailMsg = "Email is Already Exist.";
    //                 }
    //                 if (data.phone == obj.phone) {
    //                     userMsg = "Phone is Already Exist.";
    //                 }
    //                 res.send(emailMsg + " " + userMsg);
    //             } else {
    //                 next();
    //             }
    //         }
    //     })
    // },
    // Check Username for User is Exist or Not. & Also Check User Status.
    // Params Or Object : Username
    checkExestingUsername: (req, res, next) => {
        User.Auth.findOne({ username: req.body.username }, (err, data) => {
            if (err) {
                res.send(err.message);
            } else {
                if (data) {
                    let errorMsg = "";
                    if (data.username == req.body.username) {
                        errorMsg = "Username is already exist.";
                    }
                    res.send(errorMsg);
                } else {
                    next();
                }
            }
        })
    },
    varifyToken: (req, res, next) => {
        // var token = req.headers['x-access-token'];
        let token = req.headers.authorization;
        console.log(token)
        if (!token) {
            res.status(401).send({ auth: false, message: 'No token provided.' })
        } else {
            jwt.verify(token, process.env.SECRATE_KEY, (err, decoded) => {
                if (err) {
                    res.status(500).json({ auth: false, message: 'Failed to authenticate token.', error: err });
                } else {
                    next();
                }
            });
        }
    }
};

module.exports = loginObj;