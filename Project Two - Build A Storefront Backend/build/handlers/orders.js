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
var order_1 = require("../models/order"); // import order models
var authenticate_1 = require("../utility/authenticate"); // import verifyAuthToken
var store = new order_1.OrderStore(); // create new order store
////////////////////
// ORDER HANDLERS //
////////////////////
// Index Orders
// showOrder
// showOrderStatus
// Create Order
// Update Order
// Delete Order
// Get all orders
var indexOrder = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.index()];
            case 1:
                orders = _a.sent();
                res.json(orders); // send response
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
// Get order by user id
var showOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, order, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user_id = req.params.id;
                return [4 /*yield*/, store.showOrder(user_id)];
            case 1:
                order = _a.sent();
                res.json(order); // send response
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
// Get order by user id and status
var showOrderStatus = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, status_1, order, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user_id = req.params.id;
                status_1 = req.params.status;
                return [4 /*yield*/, store.showOrderStatus(user_id, status_1)];
            case 1:
                order = _a.sent();
                res.json(order); // send response
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3); // Log the error
                res.status(400);
                res.json(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Create a new order in orders table
var createOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, newOrder, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                order = {
                    status: req.body.status,
                    user_id: req.body.user_id
                };
                return [4 /*yield*/, store.create(order)];
            case 1:
                newOrder = _a.sent();
                res.json(newOrder); // send response
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
// Update an order
var updateOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order, updatedOrder, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                order = {
                    status: req.body.status,
                    user_id: req.body.user_id
                };
                return [4 /*yield*/, store.update(order, id)];
            case 1:
                updatedOrder = _a.sent();
                res.json(updatedOrder); // send response
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
var removeOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedOrder, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, store.delete(id)];
            case 1:
                deletedOrder = _a.sent();
                res.status(200);
                res.json(deletedOrder); // send response
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
/////////////////////////
// ORDER INFO HANDLERS //
/////////////////////////
// Add to OrderInfo
// Index OrderInfo
// Delete from OrderInfo
// Add product to OrderInfo
var addProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var oi, orderDetails, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                oi = {
                    order_id: req.body.order_id, // get order id
                    product_id: req.body.product_id, // get product id
                    quantity: req.body.quantity // get quantity
                };
                return [4 /*yield*/, store.addProduct(oi)];
            case 1:
                orderDetails = _a.sent();
                res.status(200);
                res.json(orderDetails); // send response
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                res.status(400);
                res.json(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Get all from OrderInfo
var indexOrderInfo = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderDetails, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.indexOrderInfo()];
            case 1:
                orderDetails = _a.sent();
                res.status(200);
                res.send(orderDetails); // send response
                return [3 /*break*/, 3];
            case 2:
                err_8 = _a.sent();
                console.error(err_8); // Log the error
                res.status(400);
                res.json(err_8); // Send the error message in the response
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Delete an order from OrderInfo
var deleteOrderInfo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedOrder, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = String(req.params.id);
                return [4 /*yield*/, store.deleteOrderInfo(id)];
            case 1:
                deletedOrder = _a.sent();
                res.status(200);
                res.json(deletedOrder); // send response
                return [3 /*break*/, 3];
            case 2:
                err_9 = _a.sent();
                res.status(400);
                res.json(err_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/////////////////////////////
// USE HANDLERS IN EXPRESS //
/////////////////////////////
// Configure routes for orders with express
var order_routes = function (app) {
    app.get('/orders', indexOrder); // get all orders
    app.get('/orders/details', indexOrderInfo); // get all order details
    app.post('/orders', createOrder); // create a new order
    app.get('/orders/:id', authenticate_1.verifyAuthToken, showOrder); // get order by order id
    app.get('/orders/:id/:status', authenticate_1.verifyAuthToken, showOrderStatus); // get order by user id and status
    app.put('/orders/:id', updateOrder); // update an order
    app.delete('/orders/:id', removeOrder); // delete an order
    app.post('/orders/:id/products', addProduct); // add product to order
    app.delete('/orders/:id/products', deleteOrderInfo); // delete an order from order details
};
// export order routes
exports.default = order_routes;
