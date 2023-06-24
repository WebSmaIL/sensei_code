"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const queries_1 = require("../../database/queries");
class UsersController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                queries_1.USERS_QUERIES.getUsers().then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                queries_1.USERS_QUERIES.getUserById(id).then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getUserByLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                res.status(500).json({ errorMessage: error });
            }
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password, email, } = req.body;
                const id = (0, uuid_1.v4)();
                queries_1.USERS_QUERIES.addUser(id, login, password, email).then((result) => {
                    queries_1.USERS_QUERIES.getUserById(id).then((result) => {
                        if (result) {
                            res.json(result.rows[0]).status(200);
                        }
                    });
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
}
exports.default = new UsersController();
