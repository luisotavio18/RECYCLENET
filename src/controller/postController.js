const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storePost(request, response) {
    let params = Array(
        request.body.titulo,
        request.body.mensagem
    )
    let query = "insert into post(titulo, mensagem) Values(?,?)";

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
    storePost
}