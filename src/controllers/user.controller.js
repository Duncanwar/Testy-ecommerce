import UserService from '../services/user.service';
import helpers from '../utils/helpers';
import responses from '../utils/responses';
import message from '../utils/customMessage';
import statusCode from '../utils/statusCode';

const {verifyToken,hashPassword,generateToken} = helpers;
const {ok, created} = statusCode;
const {userCreated} = message;
const {createUser} = UserService;
const {successResponse,errorResponse} = responses;

export default class UserController {

    static async signup(req,res){
        const inputFormData = req.body;
        const textPassword = inputFormData.password;
        inputFormData.password = hashPassword(textPassword);
        const user = await createUser(inputFormData);
        const token = generateToken(user);
        return successResponse(res,created,token,userCreated,user)
    }
  
}