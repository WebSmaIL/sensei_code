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
const queries_1 = require("../../database/queries");
class NewsController {
    getNews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                queries_1.NEWS_QUERIES.getNews().then((result) => {
                    console.log("ya");
                    res.status(200).json(result.rows);
                }).catch((error) => {
                    console.log(error);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getNewsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                queries_1.NEWS_QUERIES.getNewsById(id).then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    addNews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, content } = req.body;
                queries_1.NEWS_QUERIES.addNews(title, content, new Date()).then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
}
exports.default = new NewsController();
