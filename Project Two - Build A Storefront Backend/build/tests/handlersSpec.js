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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest")); // import supertest to test HTTP requests/responses
var server_1 = __importDefault(require("../server")); // import express app
var request = (0, supertest_1.default)(server_1.default); // supertest agent
// AUTH TOKEN FOR TESTING
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // import jsonwebtoken
var token = ''; // declare token variable
// Create a User and Token for testing beforeAll tests
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, tmp_jwt;
    return __generator(this, function (_a) {
        user = {
            first_name: 'Mark',
            last_name: 'Cavendish',
            password: 'EliteCyclist123'
        };
        tmp_jwt = jsonwebtoken_1.default.sign({ user: user }, process.env.TOKEN_SECRET);
        token = tmp_jwt; // assign tmp token to variable
        console.log('Token: ', token); // log token to console
        return [2 /*return*/];
    });
}); });
// Make token available to required tests
exports.default = token;
///////////////////////////////
// HANDLER INTEGRATION TESTS //
///////////////////////////////
/// Order of Tests ///
// CREATE User via /users
// CREATE Product via /products
// CREATE Order via /orders
// Add Order Details to OrderInfo Table via /orders/:id/products
/////////
// AUTHENTICATE User via /users/authenticate
/////////
// INDEX all users via /users
// INDEX all products via /products
// INDEX all orders via /orders
// INDEX all order details via /orders/products
/////////
// SHOW one user via /users/:id
// SHOW one product by id via /products/:id
// SHOW one product by category via /products/category/:category
// SHOW one order via /orders/:id
// SHOW one order by user id and status via /orders/:id/:status
/////////
// UPDATE one user via /users/:id
// UPDATE one product via /products/:id
// UPDATE one order via /orders/:id
/////////
// DELETE orderInfo via /orders/:id/products
// DELETE order via /orders/:id
// DELETE user via /users/:id
// DELETE product via /products/:id
// Begin integration tests
describe('HANDLER INTEGRATION TESTS', function () {
    // CREATE INTEGRATION TESTS
    describe('CREATE HADLER TESTS', function () {
        it('Should create a new user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post('/users')
                            .send({
                            first_name: 'Jane',
                            last_name: 'Ambers',
                            password: 'MyPassword123'
                        })
                            .set('Authorization', 'Bearer ' + token)];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a new product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post('/products')
                            .send({
                            name: 'Bananas',
                            price: 2.99,
                            category: 'Food'
                        })
                            .set('Authorization', 'Bearer ' + token)];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should create a new order', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post('/orders')
                            .set('Content-Type', 'application/json')
                            .send({
                            user_id: 1,
                            status: 'active'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should add order details to OrderInfo table', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.post('/orders/1/products').send({
                            order_id: 1,
                            product_id: 1,
                            quantity: 5
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // AUTHENTICATE INTEGRATION TEST
    describe('AUTHENTICATE HANDLER TEST', function () {
        it('Should authenticate user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post('/users/authenticate')
                            .set('Content-Type', 'application/json')
                            .send({
                            id: 1,
                            password: 'MyPassword123'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // INDEX INTEGRATION TESTS
    describe('INDEX HANDLER TESTS', function () {
        it('Should get all users', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/users')
                            .set('Authorization', 'Bearer ' + token)];
                    case 1:
                        result = _a.sent();
                        expect(result.body.length).toBeGreaterThan(0);
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should get all products', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/products')
                            .set('Content-type', 'application/json')];
                    case 1:
                        result = _a.sent();
                        expect(result.body[0]).toEqual({
                            id: 1,
                            name: 'Bananas',
                            price: 2.99,
                            category: 'Food'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should get all orders', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/orders')
                            .set('Content-type', 'application/json')];
                    case 1:
                        result = _a.sent();
                        expect(result.body[0]).toEqual({
                            id: 1,
                            user_id: 1,
                            status: 'active'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should get all order details from order_info', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            // .get('/orderDetails')
                            .get('/orders/details')
                            .set('Content-type', 'application/json')];
                    case 1:
                        result = _a.sent();
                        expect(result.body[0]).toEqual({
                            id: 1,
                            order_id: 1,
                            product_id: 1,
                            quantity: 5
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // SHOW INTEGRATION TESTS
    describe('SHOW HANDLER TESTS', function () {
        it('Should get the user with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/users/1')
                            .set('Authorization', 'Bearer ' + token)];
                    case 1:
                        result = _a.sent();
                        expect(result.body.first_name).toEqual('Jane');
                        expect(result.body.last_name).toEqual('Ambers');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should get one product with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get('/products/1')];
                    case 1:
                        result = _a.sent();
                        expect(result.body).toEqual({
                            id: 1,
                            name: 'Bananas',
                            price: 2.99,
                            category: 'Food'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should get one product by category', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get('/products/category/Food')];
                    case 1:
                        result = _a.sent();
                        expect(result.body[0].category).toEqual('Food');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should get one order by user ID', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/orders/1')
                            .set('Authorization', 'Bearer ' + token)];
                    case 1:
                        result = _a.sent();
                        expect(result.body).toEqual({
                            id: 1,
                            user_id: 1,
                            status: 'active'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should get one order by user ID and status', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/orders/1/active')
                            .set('Authorization', 'Bearer ' + token)];
                    case 1:
                        result = _a.sent();
                        expect(result.body).toEqual({
                            id: 1,
                            user_id: 1,
                            status: 'active'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // UPDATE INTEGRATION TESTS
    describe('UPDATE HANDLER TESTS', function () {
        it('Should update the user with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .put('/users/1')
                            .set('Content-Type', 'application/json')
                            .send({
                            first_name: 'Jane',
                            last_name: 'Ambers',
                            password: 'MyPassword123'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should update the product with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .put('/products/1')
                            .set('Content-Type', 'application/json')
                            .send({
                            name: 'Bananas',
                            price: 2.99,
                            category: 'Food'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should update the order with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .put('/orders/1')
                            .set('Content-Type', 'application/json')
                            .send({
                            user_id: 1,
                            status: 'complete'
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // DELETE INTEGRATION TESTS
    describe('DELETE HANDLER TESTS', function () {
        it('Should delete order details with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.delete('/orders/1/products')];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should delete order with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.delete('/orders/1')];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should delete user with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.delete('/users/1')];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should delete product with ID 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.delete('/products/1')];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
