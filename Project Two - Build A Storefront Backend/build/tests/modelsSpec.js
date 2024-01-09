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
// Import All Model Stores
var order_1 = require("../models/order");
var product_1 = require("../models/product");
var user_1 = require("../models/user");
// Assign Model Stores to Variables
var orderStore = new order_1.OrderStore();
var productStore = new product_1.ProductStore();
var userStore = new user_1.UserStore();
//////////////////////////
// UNIT TEST ALL MODELS //
//////////////////////////
/// Order of Tests ///
// CREATE User
// CREATE Product
// CREATE Order
// Add Order Details to OrderInfo Table
/////////
// AUTHENTICATE User
/////////
// INDEX all users
// INDEX all products
// INDEX all orders
/////////
// SHOW one user
// SHOW one product by id
// SHOW one product by category
// SHOW one order by user id
// SHOW one order by user id and status
/////////
// UPDATE one user
// UPDATE one product
// UPDATE one order
/////////
// DELETE orderInfo
// DELETE order
// DELETE user
// DELETE product
// NOTE: AUTH TO BE ADDED LATER
describe('UNIT TEST ALL MODELS', function () {
    // CREATE method tests
    describe('CREATE', function () {
        it('Should create a new user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userStore.create({
                            first_name: 'John',
                            last_name: 'Doe',
                            password: 'password123'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.first_name).toEqual('John');
                        expect(result.last_name).toEqual('Doe');
                        expect(result.id).toEqual(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a new product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productStore.createProduct({
                            name: 'Apples',
                            price: 3.99,
                            category: 'Food'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.name).toEqual('Apples');
                        expect(result.price).toEqual(3.99);
                        expect(result.category).toEqual('Food');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a new order', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.create({
                            user_id: 2,
                            status: 'active'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.user_id).toEqual(2);
                        expect(result.status).toEqual('active');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should add order details to OrderInfo table', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.addProduct({
                            order_id: 2,
                            product_id: 2,
                            quantity: 50
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.quantity).toEqual(50);
                        expect(result.order_id).toEqual(2);
                        expect(result.product_id).toEqual(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // AUTHENTICATE method test
    describe('AUTHENTICATE', function () {
        it('Should authenticate the user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userStore.authenticateUser('2', 'password123')];
                    case 1:
                        result = _a.sent();
                        expect(result).toBeTruthy;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // INDEX method tests
    describe('INDEX', function () {
        it('Should return a list of all users', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userStore.index()];
                    case 1:
                        result = _a.sent();
                        expect(result.length).toBeGreaterThan(0); // Expect more than 0 users
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return a list of all products', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productStore.index()];
                    case 1:
                        result = _a.sent();
                        expect(result.length).toBeGreaterThan(0); // Expect more than 0 products
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return a list of all orders', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.index()];
                    case 1:
                        result = _a.sent();
                        expect(result.length).toBeGreaterThan(0); // Expect more than 0 orders
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return a list of all order details', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.indexOrderInfo()];
                    case 1:
                        result = _a.sent();
                        expect(result.length).toBeGreaterThan(0); // Expect more than 0 order details
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // SHOW method tests
    describe('SHOW', function () {
        it('Should return the created user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userStore.showUser('2')];
                    case 1:
                        result = _a.sent();
                        expect(result.first_name).toEqual('John');
                        expect(result.last_name).toEqual('Doe');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return the created product by ID', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productStore.showProduct('2')];
                    case 1:
                        result = _a.sent();
                        expect(result.name).toEqual('Apples');
                        expect(result.price).toEqual(3.99);
                        expect(result.category).toEqual('Food');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return the created product by category', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productStore.showByCategory('Food')];
                    case 1:
                        result = _a.sent();
                        expect(result.length).toBeGreaterThan(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return the created order by user ID', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.showOrder('2')];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toEqual('active');
                        expect(result.user_id).toEqual(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should return the created order by user ID and status and expect to fail', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.showOrderStatus('2', 'complete')];
                    case 1:
                        result = _a.sent();
                        expect(result).toThrowError;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // UPDATE method tests
    describe('UPDATE', function () {
        it('Should update the user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userStore.update({
                            first_name: 'Jane', // Change only first name
                            last_name: 'Doe',
                            password: 'password123'
                        }, // requires all fields in store
                        '2' // user id
                        )];
                    case 1:
                        result = _a.sent();
                        expect(result.first_name).toEqual('Jane');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should update the product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productStore.update({
                            name: 'Oranges', // Change name
                            price: 2.99, // Change price
                            category: 'Food' // Same category
                        }, '2' // product id
                        )];
                    case 1:
                        result = _a.sent();
                        expect(result.name).toEqual('Oranges');
                        expect(result.price).toEqual(2.99);
                        expect(result.category).toEqual('Food');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should update the order', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.update({
                            status: 'complete', // Change status
                            user_id: 2
                        }, '2' // order id
                        )];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toEqual('complete');
                        expect(result.user_id).toEqual(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // DELETE method tests
    describe('DELETE', function () {
        // Delete orderInfo and expect error
        it('Should delete the orderInfo', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.deleteOrderInfo('2')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, orderStore.indexOrderInfo()];
                    case 2:
                        result = _a.sent();
                        expect(result).toThrowError;
                        return [2 /*return*/];
                }
            });
        }); });
        // Delete order and expect error
        it('Should delete the order', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderStore.delete('2')];
                    case 1:
                        result = _a.sent();
                        expect(result).toThrowError;
                        return [2 /*return*/];
                }
            });
        }); });
        // Delete user and expect it to return user info
        it('Should delete the user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userStore.delete('2')];
                    case 1:
                        result = _a.sent();
                        expect(result.first_name).toEqual('Jane');
                        expect(result.last_name).toEqual('Doe');
                        return [2 /*return*/];
                }
            });
        }); });
        // Delete product and expect error
        it('Should delete the product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productStore.delete('2')];
                    case 1:
                        result = _a.sent();
                        expect(result).toThrowError;
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
