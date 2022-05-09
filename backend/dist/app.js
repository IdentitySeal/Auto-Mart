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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app_controller_1 = __importDefault(require("./controller/app.controller"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// app.use(AppConfigs.APP_ROUTE, AppController);
app.use(process.env.APP_ROUTE, app_controller_1.default);
// uploaded img path
app.use('/upload', express_1.default.static(path_1.default.resolve(__dirname, "./upload")));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Express is listening at http://localhost:${port}`);
    try {
        yield mongoose_1.default.connect(`${process.env.DATABASE_URL}`)
            .then(() => console.log("MongoDB has been connected"))
            .catch((err) => console.log(err));
    }
    catch (error) {
        console.log(error.message);
    }
}));
//# sourceMappingURL=app.js.map