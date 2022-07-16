import Users from "./Users.js";
import UserService from "./UserService.js";

class UserController {
    async create(req, res) {
        try {
            //console.log(req.query); //For query | sql
            //console.log(req.body); //For showing something
            // console.log(req.files);
            const post = await UserService.create(req.body, req.files.picture)
            // res.status(200).json("Server is Alive.")
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const post = await UserService.getOne(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getAll(req, res) {
        try {
            const posts = await UserService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await UserService.update(req.body)
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async delete(req, res) {
        try {
            const post = await UserService.delete(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();