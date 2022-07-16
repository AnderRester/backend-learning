import {Router} from "express";
import UserController from "./PostController.js";

const userRouter = new Router();

router.post('/create_user', PostController.create);
router.get('/users', PostController.getAll);
router.get('/user/:id', PostController.getOne);
router.put('/change_user', PostController.update);
router.delete('/delete_user/:id', PostController.delete);

export default userRouter;