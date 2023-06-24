"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const NEWS_QUERIES = {
    getNews: () => connection_1.default.query("SELECT (id, title, date) FROM news"),
    getNewsById: (id) => connection_1.default.query(`SELECT * FROM news WHERE id=${id}`),
    addNews: (title, content, date) => connection_1.default.query(`INSERT INTO news (title, content, date) VALUES ('${title}', '${content}', '${date}')`),
};
exports.default = NEWS_QUERIES;