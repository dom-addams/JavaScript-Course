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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product"); // import product models
var authenticate_1 = require("../utility/authenticate");
var store = new product_1.ProductStore(); // create new product store
//////////////////////
// PRODUCT HANDLERS //
//////////////////////
// Index Products
// showProduct
// showByCategory
// Create Product
// Update Product
// Delete Product
// Get all products
var indexProduct = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.index()];
            case 1:
                products = _a.sent();
                res.json(products); // send response
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Get product by product id
var showProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, store.showProduct(id)];
            case 1:
                product = _a.sent();
                res.json(product); // send response
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(400);
                res.json(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Get product by product category
var showByCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var category, product, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                category = req.params.category;
                return [4 /*yield*/, store.showByCategory(category)];
            case 1:
                product = _a.sent();
                res.json(product); // send response
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400);
                res.json(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Create a new product in products table
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, newProduct, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = {
                    name: req.body.name,
                    price: req.body.price,
                    category: req.body.category
                };
                return [4 /*yield*/, store.createProduct(product)];
            case 1:
                newProduct = _a.sent();
                res.json(newProduct); // send response
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(400);
                res.json(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update a product
var updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product, updatedProduct, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                product = {
                    name: req.body.name,
                    price: req.body.price,
                    category: req.body.category
                };
                return [4 /*yield*/, store.update(product, id)];
            case 1:
                updatedProduct = _a.sent();
                res.json(updatedProduct); // send response
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(400);
                res.json(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Delete a product
var removeProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleted, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, store.delete(id)];
            case 1:
                deleted = _a.sent();
                res.json(deleted); // send response
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(400);
                res.json(err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/////////////////////////////
// USE HANDLERS IN EXPRESS //
/////////////////////////////
// Configure routes for products with express
var product_routes = function (app) {
    app.get('/products', indexProduct); // get all products
    app.get('/products/:id', showProduct); // get product by product id
    app.get('/products/category/:category', showByCategory); // get product by product category
    app.post('/products', authenticate_1.verifyAuthToken, createProduct); // create a new product
    app.put('/products/:id', updateProduct); // update a product
    app.delete('/products/:id', removeProduct); // delete a product
};
// export product routes
exports.default = product_routes;
