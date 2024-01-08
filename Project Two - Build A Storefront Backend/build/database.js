"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_TEST_USER = _a.POSTGRES_TEST_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_TEST_PASSWORD = _a.POSTGRES_TEST_PASSWORD, NODE_ENV = _a.NODE_ENV;
// Database configuration based on NODE_ENV
var db_pool = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: NODE_ENV === 'dev' ? POSTGRES_DB : POSTGRES_TEST_DB,
    user: NODE_ENV === 'dev' ? POSTGRES_USER : POSTGRES_TEST_USER,
    password: NODE_ENV === 'dev' ? POSTGRES_PASSWORD : POSTGRES_TEST_PASSWORD
});
// Print NODE_ENV to console to confirm which environment is being used
console.log("ENV: ".concat(NODE_ENV));
exports.default = db_pool;
