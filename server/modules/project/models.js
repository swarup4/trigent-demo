const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

// Project
const project = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    category: { type: objectId, required: true },
    subCategory: { type: Schema.Types.Mixed, required: true },
    techStack: { type: Schema.Types.Mixed, required: true },
    status: { type: Boolean, default: 1 },
    createdAt: Date,
    updatedAt: Date
};
const projectSchema = new Schema(project, { versionKey: false, timestamps: true });


// Project Image
const projectImage = {
    _id: { type: objectId, auto: true },
    projectId: { type: objectId, required: true },
    projectImage: Schema.Types.Mixed,
    createdAt: Date,
    updatedAt: Date
};
const projectImageSchema = new Schema(projectImage, { versionKey: false, timestamps: true });


module.exports = {
    Project: mongoose.model("project", projectSchema),
    Image: mongoose.model("projectImage", projectImageSchema)
};