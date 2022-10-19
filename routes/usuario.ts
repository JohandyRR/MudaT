import { Router, Request, Response } from 'express';
import { Usuario } from '../models/usuario.ml';


const userRoutes = Router();

userRoutes.post('/create', ( req: Request, res: Response ) => {

    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
    };


    res.json({
        ok: true,
        user: user,
        mensaje: 'Todo funciona bien!'
    })
});


export default userRoutes;
