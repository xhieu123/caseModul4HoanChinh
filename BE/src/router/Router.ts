import {Router} from "express";

import {userRouter} from "./userRouter";
import homeRouter from "./homeRouter";

const router= Router();
router.use('/homes', homeRouter)
router.use('/', userRouter)
export default router;
