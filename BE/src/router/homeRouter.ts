import {Router} from "express";

import auth from "../middleware/jwt";
import homeController from "../controller/homeController";
// import {AuthorizeMiddleware} from "../middleware/authorize.middleware";

const homeRouter = Router();
// homeRouter.use(auth)
homeRouter.get('/', homeController.findAll);
homeRouter.get('/:id', homeController.findById);


// homeRouter.use(AuthorizeMiddleware.authorizedAdmin)

homeRouter.post('', homeController.add);
homeRouter.put('/:id', homeController.update);
homeRouter.delete('/:id', homeController.delete);
export default homeRouter;