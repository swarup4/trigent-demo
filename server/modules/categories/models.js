const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Project
const category = {
    _id: { type: objectId, auto: true },
    options: [{ type: objectId, required: true }],
    name: { type: String, required: true },
    status: { type: Boolean, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const categorySchema = new Schema(category, { versionKey: false, timestamps: true });


// Project Image
const subCategory = {
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    status: { type: Boolean, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const subCategorySchema = new Schema(subCategory, { versionKey: false, timestamps: true });


module.exports = {
    Category: mongoose.model("category", categorySchema),
    SubCategory: mongoose.model("subCategory", subCategorySchema)
};