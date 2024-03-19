const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Project
const projectCategory = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    projectName: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    projectType: { type: String, required: true },
    status: { type: Number, required: true },
    createdAt: Date,
    updatedAt: Date
};
const projectCategorySchema = new Schema(projectCategory, { versionKey: false, timestamps: true });


// Project Image
const projectImage = {
    _id: { type: objectId, auto: true },
    projectId: { type: objectId, required: true },
    projectImage: Schema.Types.Mixed,
    createdAt: Date,
    updatedAt: Date
};
const projectImageSchema = new Schema(projectImage, { versionKey: false, timestamps: true });


// Project Details
const projectDetails = {
    _id: { type: objectId, auto: true },
    projectId: { type: objectId, required: true },
    projectDescription: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
};
const projectDetailsSchema = new Schema(projectDetails, { versionKey: false, timestamps: true });



module.exports = {
    Category: mongoose.model("project", projectCategorySchema),
    Image: mongoose.model("projectImage", projectImageSchema),
    Details: mongoose.model("projectDetails", projectDetailsSchema)
};