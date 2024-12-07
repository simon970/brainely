"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://simonpaul496:m8MFa61EBtehzBaK@cluster0.a8zuj.mongodb.net/brainely");
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
exports.userModel = mongoose_1.default.model('users', userSchema);
