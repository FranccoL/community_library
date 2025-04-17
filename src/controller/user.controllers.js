import userService from '../service/user.services.js';

async function createUserController(req, res) {
    const newUser = req.body;
    
    try {
        const user =  userService.createUserService(newUser);
        res.status(201).send({user})

     }  catch (e){
        return res.status(400).send(e.message);
    }
}

async function findAllUserController(req, res) {
    try {
        const users = await userService.findAllUserService();
        res.status(200).send(users);
    } catch (e) {
        return res.status(404).send(e.message);
    }
}

async function findUserByIdController(req, res) {
    const{id} = req.params;

    try {
        const user = await userService.findUserByIdService(id);
        res.status ({ user });
    } catch (e) {
        return res.status(404).send(e.message);
    }
}

async function updateUserController(req, res) {
    const { id } = req.params;
    const newUser = req.body;
    try {
        const user = await userService.updateUserService(newUser, id);
        res.status(200).send({user});
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

async function deleteUserController(req, res) {
    const { id } = req.params;
    try {
        const message = await userService.deleteUserService(id);
        res.status(200).send({message});
    } catch (e) {
        return res.status(404).send(e.message);
    }
}


export default {
    createUserController,
    findAllUserController,
    findUserByIdController,
    updateUserController,
    deleteUserController
};