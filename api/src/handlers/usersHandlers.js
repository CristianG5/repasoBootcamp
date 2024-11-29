const { createUserDB, getUserById, getAllUsers, getUserByName } = require("../controllers/usersControllers");

getUsersHandlers = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const userByName = await getUserByName(name)
                res.status(200).json(userByName);
        }else{
            const response = await getAllUsers()
                res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

getDetalaisHandlers = async (req, res) =>{
    const {id} = req.params;

    const source = isNaN(id) ? "bdd" : "api";

    try {
        const response = await getUserById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
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