import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);
    return token;
};

const hashPassword = (password) => {
    const hashPasswordValue = bcrypt.hashSync(password,15);
    return hashPasswordValue 
}

const comparePassword = (inputPassword,storedPassword) => {
    const boolPassword = bcrypt.compare(inputPassword,storedPassword);
    return boolPassword;
}

const verifyToken= (token) => {
    const boolToken = jwt.verify(token, process.env.JWT_SECRET);
    return boolToken;
}

export default {
    generateToken,
    hashPassword,
    comparePassword,
    verifyToken
}
