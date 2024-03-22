const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


// User
const user = {
    _id: { type: objectId, auto: true },
    fname: String,
    lname: String,
    role: String,
    username: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 }
};
const userSchema = new Schema(user, { versionKey: false, timestamps: true });


// Company
const company = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    companyName: String,
    logo: String,
    address: String,
    city: String,
    state: String,
    country: String,
    pinCode: String,
    createdAt: Date,
    updatedAt: Date
};
const companySchema = new Schema(company, { versionKey: false, timestamps: true });


// User Profile Pics
const userProfilePics = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    profilePics: String,
    createdAt: Date,
    updatedAt: Date
};
const userProfilePicsSchema = new Schema(userProfilePics, { versionKey: false, timestamps: true });


// User Project
const userProject = {
    _id: { type: objectId, auto: true },
    userId: { type: objectId, required: true },
    companyId: { type: objectId, required: true },
    projects: [{ type: Schema.Types.Mixed }],
    createdAt: Date,
    updatedAt: Date
};
const userProjectSchema = new Schema(userProject, { versionKey: false, timestamps: true });


module.exports = {
    Auth: mongoose.model("user", userSchema),
    Company: mongoose.model("company", companySchema),
    ProfilePics: mongoose.model("userProfilePics", userProfilePicsSchema),
    UserProject: mongoose.model("userProject", userProjectSchema)
};