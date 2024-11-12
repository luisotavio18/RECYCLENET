const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function entrarPost(request, response) {
    let params = Array(
        request.body.email,
        request.body.senha
    )
    
    console.log(params)

    let query = "select * from cadastro where email = ? and senha = ?;";

    connection.query(query, params, (err, results) => {
        console.log(err, results);
    if(results) {
        response
        .status(201)
        .json({
            success: true,
            message: "sucesso",
            data: results
        })
    } else{
        response
        .status(400)
        .json({
            success: false,
            message: "ops, deu problema!",
            data: err
        })
    }
    });
}

module.exports = {
    entrarPost
}