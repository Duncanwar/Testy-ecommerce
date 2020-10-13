import User from '../models/user.model'

/**
 * @description This service deals with the User model
 */

 export default class UserServices {
     /**
      * @description this service create a new user in the db
      * @param {object} user 
      */
     static async createUser(user) {
         const newUser = User.create(user)
         return newUser
     }

     static async getUserById(id){
         const user = User.findById(id); 
         return user; 
     }
 }