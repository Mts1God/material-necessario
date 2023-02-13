import { Request, Response } from 'express';
import { watch } from 'fs';
import { Product } from '../models/Product';
//import {sequelize} from '../config/mysql'
//importando o user
import { User } from '../models/user';

export const home = async (req: Request, res: Response)=>{

    let users = await User.findAll()

    //try{
    //    await sequelize.authenticate()
    //    console.log("conexão estabelecida com sucesso")
    // }catch(error){
    //    console.log("Deu problema",error)
    //}

    //let age: number = 90;
    //let showOld: boolean = false;

    //if(age > 50) {
    //    showOld = true;
    //}

    //let list = Product.getAll();
    //let expensiveList = Product.getFromPriceAfter(12);

    //const user = User.build({
    //    name: 'Fulano',
    //    age:15
    //})
    //await user.save()

    res.render('pages/home', {
        users
    });
};

export const novoUsuario = async (req:Request, res:Response) =>{
    let name = req.body.name
    let age = parseInt(req.body.age)
    
    if (name&&age){
        const newUser = User.build({
            name,
            age
        })
        await newUser.save()
    }
    //após salvar os dados, redirecionar para home
    res.redirect('/')
} 