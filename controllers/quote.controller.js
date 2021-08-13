const Validator = require('fastest-validator');
const models = require('../models');

////////RANDOM//////////

function randomNumber(length) {
    let randomNumber = Math.floor(Math.random() * length);
    return randomNumber;
  }

////////CRUD//////////

function save(req, res) {

    const schema = {
        title: { type: "string", optional: false, max: "100" },
        content: { type: "string", optional: false, max: "500" },
        UserId: { type: "number", optional: true },
    }

    const v = new Validator();
    const validationResponse = v.validate(req.body, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Quote.create(req.body).then(result => {
        res.status(201).json({
            message: "Quote created successfully",
            quote: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}


function showById(req, res) {

    const id = req.params.id;

    models.Quote.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}


function showAll(req, res) {

    models.Quote.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function findRandom(req, res) {
    models.Quote.findAll().then(result => {
        res.status(200).json(result[randomNumber(result.length)]);
    })
}

function update(req, res) {

    const id = req.params.id;

    const updatedQuote = {
        title: req.body.title,
        content: req.body.content,
    }

    const userId = 1;

    const schema = {
        title: { type: "string", optional: false, max: "100" },
        content: { type: "string", optional: false, max: "500" },
    }

    const v = new Validator();
    const validationResponse = v.validate(updatedQuote, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }


    models.Quote.update(updatedQuote, { where: { id: id, userId: userId } }).then(result => {
        res.status(200).json({
            message: "Quote updated successfully",
            quote: updatedQuote
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}


function destroy(req, res) {

    const id = req.params.id;
    const userId = 1;

    models.Quote.destroy({ where: { id: id, userId: userId } }).then(result => {
        res.status(200).json({
            message: "Quote deleted successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    save: save,
    showById: showById,
    showAll: showAll,
    update: update,
    destroy: destroy,
    findRandom: findRandom
}