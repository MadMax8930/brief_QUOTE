const validatorClass = require('fastest-validator');
const Validator = require('fastest-validator');
const models = require('../models');
const quote = require('../models/quote');
const jwt = require('jsonwebtoken');

////////RANDOM//////////

function randomNumber(length) {
    let randomNumber = Math.floor(Math.random() * length);
    return randomNumber;
  }

function findRandom(req, res) {
    models.Quote.findAll().then(result => {
        res.status(200).json(result[randomNumber(result.length)]);
  })
}

////////CRUD//////////

/////// CREATE///////

function createQuote(req, res) {

    const quote = {
        title: req.body.title,
        content: req.body.content,
        userId: req.userData.userId
    }

    ///// Validation for Create /////

    const validationSchema = {
        title: {type: "string", optional: false, max: "100"},
        content: {type: "string", optional: false, max: "500"},
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(quote, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    } else {
        models.Quote.create(quote).then(result => {
                res.status(201).json({
                    message: "Quote successfully created",
                    post: result
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong!",
                    error: error
                });
            });
        }
}

/////// READ ///////

function readQuote(req, res){

    const id = req.params.id;

    models.Quote.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Squad Post xnot found"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something wentd wrong!"
        });
    });
}

function readAllQuotes(req, res){

    models.Quote.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went all wrong!"
        });
    });
}

/////// UPDATE ///////

function updateQuote(req, res){

    const id = req.params.id;
    const updatedQuote = {
        title: req.body.title,
        content: req.body.content
    }
    const userId = req.userData.userId;

    ///// Validation for Update /////

    const validationSchema = {
        title: {type: "string", optional: true, max: "100"},
        content: {type: "string", optional: true, max: "500"},
    }

    const validatorInstance = new validatorClass();
    const validationResponse = validatorInstance.validate(updatedQuote, validationSchema);

    if(validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Quote.update(updatedQuote, {where: {id:id, userId:userId}}).then(result => {
        if (result) {
            res.status(200).json({
                message: "Quote successfully updated",
                post: updatedQuote
            });
        } else {
            res.status(404).json({
                message: "Quote not found"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

/////// DELETE ///////

function deleteQuote(req, res) {

    const id = req.params.id;
    const userId =req.userData.userId;

    models.Quote.destroy({where: {id:id, userId:userId}}).then(result => {
        if (result) {
            res.status(200).json({
                message: "Quote successfully deleted"
            });
        } else {
            res.status(404).json({
                message: "Quote not found"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function readByuserId(req, res) {

    const quote = {
        title: req.body.title,
        content: req.body.content
    }
    const userId = req.userData.userId;

    models.Quote.findAll(quote, {where: {userId: userId}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Aye! Something went wrong!"
        });
    });


}

////////////////////

// function getList(req, res) {
    
//     models.Quote.find({userId: req.user.userId}, (err, quotes) => {
//        if(err) {
//          console.log(err);
//        } else {
//          res.render('/account', { currentUser: req.user, quotes: quotes});
//        }
//     });
// };


/////// EXPORTS ///////

module.exports = {
    createQuote : createQuote,
    readQuote : readQuote,
    readAllQuotes : readAllQuotes,
    updateQuote : updateQuote,
    deleteQuote : deleteQuote,
    findRandom: findRandom,
    readByuserId: readByuserId
    // getList : getList
}

// module.exports = {
//     save: save,
//     showById: showById,
//     showAll: showAll,
//     update: update,
//     destroy: destroy,
//     findRandom: findRandom,
//     showAllbyUser: showAllbyUser,
//     getList: getList
// }

// function save(req, res) {


//     const schema = {
//         title: { type: "string", optional: false, max: "100" },
//         content: { type: "string", optional: false, max: "500" },
//     }

//     const v = new Validator();
//     const validationResponse = v.validate(req.body, schema);
//     console.log(getUserId(req))

//     if (validationResponse !== true) {
//         return res.status(400).json({
//             message: "Validation failed",
//             errors: validationResponse
//         });
//     }
    
//     req.body.UserId = getUserId(req)

//     models.Quote.create(quote).then(result => {
//                 res.status(201).json({
//                     message: "Squad Post successfully created",
//                     post: result
//                 });
//             }).catch(error => {
//                 res.status(500).json({
//                     message: "Something went wrong!",
//                     error: error
//                 });
//             });
// }


// function showById(req, res) {

//     const id = req.params.id;

//     models.Quote.findByPk(id).then(result => {
//         res.status(200).json();
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong!"
//         });
//     });
// }

// function showAll(req, res) {

//     models.Quote.findAll().then(result => {
//         res.status(200).json(result);
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong!"
//         });
//     });
// }

// function showAllbyUser(req, res) {

//     models.Quote.findAll({where: {userId: userId}}).then(result => {
//         res.status(200).json(result);
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong!"
//         });
//     });
// }
   
// function update(req, res) {

//     const id = req.params.id;
//     const updatedQuote = {
//         title: req.body.title,
//         content: req.body.content,
//     }
//     const userId = req.userData.userId;

//     ///// Validation for Update /////

//     const validationSchema = {
//         title: {type: "string", optional: true, max: "100"},
//         content: {type: "string", optional: true, max: "500"}
//     }

//     const validatorInstance = new validatorClass();
//     const validationResponse = validatorInstance.validate(updatedQuote, validationSchema);

//     if(validationResponse !== true) {
//         return res.status(400).json({
//             message: "Validation failed",
//             errors: validationResponse
//         });
//     }

//     models.Quote.update(updatedQuote, {where: {id:id, userId:userId}}).then(result => {

//         if (result) {
//             res.status(200).json({
//                 message: "Quote successfully updated",
//                 post: updatedQuote
//             });
//         } else {
//             res.status(404).json({
//                 message: "Quote not found"
//             });
//         }
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong!",
//             error: error
//         });
//     });
// }

function getUserId (req) {
    var headerAuth = req.headers['authorization'];
    myUser = jwt.decode(headerAuth.split(" ")[1]).userId
    return myUser
}