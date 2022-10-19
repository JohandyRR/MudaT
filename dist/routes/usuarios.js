"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/create', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    res.json({
        ok: true,
        user: user,
        mensaje: 'Todo funciona bien!'
    });
});
exports.default = userRoutes;
