const { createUserDB } = require("../controllers/usersControllers");

getUsersHandlers = (req, res) => {
    const {name, email} = req.query;
    if(name) {
        res.status(200).send(`Aqui esta el usuario ${name}`)
    }else{
        res.status(200).send("Todos los Usuario")
    }
}

getDetalaisHandlers = (req, res) =>{
    const {id} = req.params;
    res.status(200).send(`Detalle del usuario ${id}`)
}

createUsersHandlers = async (req, res) => {
    const{name, email, phone} = req.body;
    // res.status(200).send(`Usuario ${name} registrado con el email ${email}`);
    try {
        const response = await createUserDB(name, email, phone)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getUsersHandlers,
    getDetalaisHandlers,
    createUsersHandlers
}