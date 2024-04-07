import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { rulesStoreUserRequest, StoreUserRequest } from "../validators/requests/user/StoreUserRequest";
import { rulesUpdateUserRequest, UpdateUserRequest } from "../validators/requests/user/UpdateUserRequest";
import { SessionController } from "../controllers/SessionController";
import { rulesStoreSessionRequest, StoreSessionRequest } from "../validators/requests/session/StoreSessionRequest";
import { VerifyIfIsAuthenticated } from "../midlewares/VerifyIfIsAuthenticated";

const router = Router();

router.post('/sessions', rulesStoreSessionRequest, new StoreSessionRequest().handle, new SessionController().store);
router.post('/users', rulesStoreUserRequest, new StoreUserRequest().handle, new UserController().store);
router.get('/me', VerifyIfIsAuthenticated, new UserController().me);
router.put('/me', VerifyIfIsAuthenticated, rulesUpdateUserRequest, new UpdateUserRequest().handle, new UserController().meUpdate);


export { router }