import {User} from "../entity/User";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {SECRET} from "../middleware/jwt";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }


    // register = async (user) => {
    //     let userFind = await this.userRepository.findOneBy({
    //         where:{
    //             user: user.username
    //         }
    //     })
    //     console.log(userFind)
    //     if(userFind != undefined){
    //         user.password = await bcrypt.hash(user.password, 10);
    //         return this.userRepository.save(user);
    //     } else {
    //         return "Fail!"
    //     }
    //
    // }
    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user);
    }


    checkUser = async (user) => {
        let userFind = await this.userRepository.findOneBy({username: user.username});
        if (!userFind) {
            return 'User is not exist'
        } else {
            let passWordCompare = await bcrypt.compare(user.password, userFind.password);
            if (passWordCompare) {
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role
                }
                return {
                    token: jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    }),
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role
                }
            } else {
                return 'Password is wrong'
            }
        }
    }

}

export default new UserService();