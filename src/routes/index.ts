import { Router } from "express";
import multer from 'multer';
import uploadConfig from '../config/multer';


import { UserController } from "../controllers/UserController";
import { rulesStoreUserRequest, StoreUserRequest } from "../validators/requests/user/StoreUserRequest";
import { rulesUpdateUserRequest, UpdateUserRequest } from "../validators/requests/user/UpdateUserRequest";
import { SessionController } from "../controllers/SessionController";
import { rulesStoreSessionRequest, StoreSessionRequest } from "../validators/requests/session/StoreSessionRequest";
import { rulesStoreCategoryRequest, StoreCategoryRequest } from "../validators/requests/category/StoreCategoryRequest";
import { rulesUpdateCategoryRequest, UpdateCategoryRequest } from "../validators/requests/category/UpdateCategoryRequest";
import { VerifyIfIsAuthenticated } from "../midlewares/VerifyIfIsAuthenticated";
import { CandyCategoryController } from "../controllers/CandyCategoryController";

const router = Router();
const upload = multer(uploadConfig.upload("../uploads/img"));

router.post('/sessions', rulesStoreSessionRequest, new StoreSessionRequest().handle, new SessionController().store);

router.post('/users', rulesStoreUserRequest, new StoreUserRequest().handle, new UserController().store);

router.get('/me', VerifyIfIsAuthenticated, new UserController().me);
router.put('/me', VerifyIfIsAuthenticated, rulesUpdateUserRequest, new UpdateUserRequest().handle, new UserController().meUpdate);

router.post('/categories', VerifyIfIsAuthenticated, rulesStoreCategoryRequest, new StoreCategoryRequest().handle, new CandyCategoryController().store);
router.put('/categories/:id', VerifyIfIsAuthenticated, rulesUpdateCategoryRequest, new UpdateCategoryRequest().handle, new CandyCategoryController().update);
router.get('/categories', VerifyIfIsAuthenticated,  new CandyCategoryController().index);
router.get('/categories/:id', VerifyIfIsAuthenticated,  new CandyCategoryController().show);
router.delete('/categories/:id', VerifyIfIsAuthenticated,  new CandyCategoryController().destroy);


export { router }