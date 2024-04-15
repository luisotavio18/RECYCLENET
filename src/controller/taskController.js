const connection = require('../config/db');
const dotenv = require('dotenv').config();
 
async function storeTask(request, response) {
 
// recuperando fromulario
    const params = array(
        request.body.title,
        request.body.description
    );
 
const query = "INSERT INTO db_tasks(title, description) Values(?,?)";
 
connection.query(query, params, (err, results) => {
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
            message: "ops, deu problema!"
        })
    }
})
}
 
module.exports = {
    storeTask
}