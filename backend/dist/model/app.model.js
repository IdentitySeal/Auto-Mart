"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarAdverModel = void 0;
const mongoose_1 = require("mongoose");
const CarAdverSchema = new mongoose_1.Schema({
    brand: { required: true, type: 'String' },
    description: { required: true, type: 'String' },
    cost: { required: true, type: 'Number' },
    year: { required: true, type: 'Number' },
    model: { required: true, type: 'String' },
    color: { required: true, type: 'String' },
    image: { required: true, type: 'String' },
}, { timestamps: true });
exports.CarAdverModel = (0, mongoose_1.model)('car_adverts', CarAdverSchema);
//# sourceMappingURL=app.model.js.map