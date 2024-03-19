const express = require('express');
const multer = require('multer');

const Project = require('./models');
// const projectMiddleware = require('../../middleware/project');
const userMiddleware = require('../../middleware/user');
// const uploadMiddleware = require('../../middleware/uploadImage');

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

router.get('/getAllProject', async (req, res) => {
    // let aggregate = [
    //     {
    //         $lookup: {
    //             from: 'feedbacks',
    //             localField: '_id',
    //             foreignField: 'projectId',
    //             as: 'feedback'
    //         }
    //     }, {
    //         $lookup: {
    //             from: 'users',
    //             localField: 'userId',
    //             foreignField: '_id',
    //             as: 'user'
    //         }
    //     }, {
    //         $lookup: {
    //             from: 'users',
    //             localField: 'collab',
    //             foreignField: '_id',
    //             as: 'collab'
    //         }
    //     }, {
    //         $project: {
    //             _id: '$_id',
    //             userId: '$userId',
    //             fname: '$user.fname',
    //             lname: '$user.lname',
    //             collab: '$collab',
    //             projectName: '$projectName',
    //             category: '$category',
    //             subCategory: '$subCategory',
    //             projectType: '$projectType',
    //             location: '$location',
    //             size: '$size',
    //             price: '$price',
    //             color: '$color',
    //             rarity: '$rarity',
    //             waysToBuy: '$waysToBuy',
    //             buyFrom: '$buyFrom',
    //             projectImage: '$projectImage',
    //             createdDate: '$createdDate',
    //             status: '$status',
    //             feedback: {
    //                 $cond: {
    //                     if: { $eq: [{ $size: '$feedback' }, 0] },
    //                     then: [{}],
    //                     else: '$feedback'
    //                 }
    //             }
    //         }
    //     },
    //     { $unwind: '$feedback' },
    //     { $unwind: '$fname' },
    //     { $unwind: '$lname' },
    //     {
    //         $group: {
    //             _id: '$_id',
    //             userId: { $first: '$userId' },
    //             fname: { $first: '$fname' },
    //             lname: { $first: '$lname' },
    //             collab: { $first: '$collab' },
    //             projectName: { $first: '$projectName' },
    //             category: { $first: '$category' },
    //             subCategory: { $first: '$subCategory' },
    //             projectType: { $first: '$projectType' },
    //             location: { $first: '$location' },
    //             size: { $first: '$size' },
    //             price: { $first: '$price' },
    //             color: { $first: '$color' },
    //             rarity: { $first: '$rarity' },
    //             waysToBuy: { $first: '$waysToBuy' },
    //             buyFrom: { $first: '$buyFrom' },
    //             projectImage: { $first: '$projectImage' },
    //             like: {
    //                 $sum: { $cond: ['$feedback.like', 1, 0] }
    //             },
    //             share: {
    //                 $sum: { $cond: ['$feedback.share', 1, 0] }
    //             },
    //             createdDate: {
    //                 $first: '$createdDate'
    //             },
    //             status: {
    //                 $first: '$status'
    //             }
    //         }
    //     }, {
    //         $unset: ['collab.password', 'collab.emailVerified', 'collab.phoneVerified', 'collab.status', 'collab.role',
    //             'collab.email', 'collab.phone', 'collab.countryCode', 'collab.updatedDate', 'collab.createdDate', 'collab.securityCode'
    //         ]
    //     }
    // ];

    try {
        // let project = await Project.Category.aggregate(aggregate);
        const project = await Project.Category.find();
        console.log(project.length)
        res.json(project);
    } catch (error) {
        res.send(error);
    }
});

router.get('/getProject', async (req, res) => {
    // let aggregate = [
    //     {
    //         $lookup: {
    //             from: 'feedbacks',
    //             localField: '_id',
    //             foreignField: 'projectId',
    //             as: 'feedback'
    //         }
    //     }, {
    //         $lookup: {
    //             from: 'users',
    //             localField: 'userId',
    //             foreignField: '_id',
    //             as: 'user'
    //         }
    //     }, {
    //         $lookup: {
    //             from: 'users',
    //             localField: 'collab',
    //             foreignField: '_id',
    //             as: 'collab'
    //         }
    //     }, {
    //         $project: {
    //             _id: '$_id',
    //             userId: '$userId',
    //             fname: '$user.fname',
    //             lname: '$user.lname',
    //             collab: '$collab',
    //             projectName: '$projectName',
    //             category: '$category',
    //             subCategory: '$subCategory',
    //             projectType: '$projectType',
    //             location: '$location',
    //             size: '$size',
    //             price: '$price',
    //             color: '$color',
    //             rarity: '$rarity',
    //             waysToBuy: '$waysToBuy',
    //             buyFrom: '$buyFrom',
    //             projectImage: '$projectImage',
    //             createdDate: '$createdDate',
    //             status: '$status',
    //             feedback: {
    //                 $cond: {
    //                     if: { $eq: [{ $size: '$feedback' }, 0] },
    //                     then: [{}],
    //                     else: '$feedback'
    //                 }
    //             }
    //         }
    //     },
    //     { $unwind: '$feedback' },
    //     { $unwind: '$fname' },
    //     { $unwind: '$lname' },
    //     {
    //         $group: {
    //             _id: '$_id',
    //             userId: { $first: '$userId' },
    //             fname: { $first: '$fname' },
    //             lname: { $first: '$lname' },
    //             collab: { $first: '$collab' },
    //             projectName: { $first: '$projectName' },
    //             category: { $first: '$category' },
    //             subCategory: { $first: '$subCategory' },
    //             projectType: { $first: '$projectType' },
    //             location: { $first: '$location' },
    //             size: { $first: '$size' },
    //             price: { $first: '$price' },
    //             color: { $first: '$color' },
    //             rarity: { $first: '$rarity' },
    //             waysToBuy: { $first: '$waysToBuy' },
    //             buyFrom: { $first: '$buyFrom' },
    //             projectImage: { $first: '$projectImage' },
    //             like: {
    //                 $sum: { $cond: ['$feedback.like', 1, 0] }
    //             },
    //             share: {
    //                 $sum: { $cond: ['$feedback.share', 1, 0] }
    //             },
    //             createdDate: {
    //                 $first: '$createdDate'
    //             },
    //             status: {
    //                 $first: '$status'
    //             }
    //         }
    //     }, {
    //         $unset: ['collab.password', 'collab.emailVerified', 'collab.phoneVerified', 'collab.status', 'collab.role',
    //             'collab.email', 'collab.phone', 'collab.countryCode', 'collab.updatedDate', 'collab.createdDate', 'collab.securityCode'
    //         ]
    //     }, {
    //         $match: filter
    //     }
    // ]

    try {
        const filter = req.query;
        // let project = await Project.Category.aggregate(aggregate);
        const project = await Project.Category.find(filter);
        res.json(project);
    } catch (error) {
        res.send(error);
    }
});

/* 
{
    "userId": "609ab05eabddac700c9e5420",
    "collab": "609ab05eabddac700c9e5420",
    "projectName": "The Abstract Ocean Bubble 100% Hand Painted Wall Painting (With Outer Floater frame)",
    "category": "Art",
    "subCategory": "Prints",
    "projectType": "Photography",
    "stock": 1,
    "price": 7999.00,
    "discPrice": 7100,
    "quantity": 1,
    "size": {
        "height": "36 Inches",
        "weidth": "48 Inches",
        "depth": "5 Inches"
    },
    "color": "Deep Blue",
    "rarity": "Limited Edition",
    "waysToBuy": "Buy Now",
    "buyFrom": "Artists"
}
*/
router.post('/addProject', userMiddleware.varifyToken, async (req, res) => {
    try {
        const model = new Project.Category(req.body);
        const project = await model.save();
        if (project) {
            res.json({
                success: true,
                message: 'Add Project Data'
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateProject/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const project = await Project.Category.findOneAndUpdate({ _id: id }, body);
        if (project) {
            res.json({
                success: true,
                data: project
            });
        };
    } catch (error) {
        res.send(error);
    }
});

// router.delete('/deleteProject/:id', userMiddleware.varifyToken, projectMiddleware.deleteProjectDetails, projectMiddleware.deleteProjectReview, async (req, res) => {
//     try {
//         const id = req.params.id;
//         const project = await Project.Category.findOneAndDelete({ _id: id });
//         if (project) {
//             res.json({
//                 success: true,
//                 data: project
//             });
//         };
//     } catch (error) {
//         res.send(error);
//     }
// });


// Project Details
router.get('/projectDetails/:id', async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.Details.find({ projectId: projectId });
        if (project) {
            res.json({
                success: true,
                data: project
            });
        };
    } catch (error) {
        res.send(error);
    }
});

/*
{
    projectId: 609946fdba377359532041ca,
    projectDescription: "String"
}
*/
router.post('/addProjectDetails', userMiddleware.varifyToken, async (req, res) => {
    try {
        let model = new Project.Details(req.body);
        let project = await model.save();
        if (project) {
            res.json({
                success: true,
                message: 'Project Details Add into database'
            });
        }
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateProjectDetails/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const project = await Project.Details.findOneAndUpdate({ _id: id }, body);
        if (project) {
            res.json({
                success: true,
                data: project
            });
        };
    } catch (error) {
        res.send(error);
    }
});

// router.post('/addProjectImage', userMiddleware.varifyToken, upload.single("project"), projectMiddleware.uploadProjectImage);

router.post('/uploadProjectImage', userMiddleware.varifyToken, async (req, res) => {
    try {
        let model = new Project.Image(req.body);
        let project = await model.save();
        if (project) {
            res.json({
                success: true,
                message: 'Project Images uploaded successfully into Database'
            });
        }
    } catch (error) {
        res.send(error);
    }
});


router.get('/getVariant', async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Project.Variant.findOne({ _id: id });
        if (project) {
            res.json({
                success: true,
                data: project
            });
        };
    } catch (error) {
        res.send(error);
    }
});

/* {
    "colors": [{
        "color": "Blue",
        "code": "#0000FF"
    }, {
        "color": "Red",
        "code": "#FF0000"
    }],
    "size": ["Height", "Weidth", "Depth"],
    "shape": ["Triangle", "Rectangular", "Circle"],
    "pattern": ["Printed", "Canvas", "Oil Painting"],   // Finishing Type, Painting Type
    "type": ["Handmade", "Images"],
    "material": ["Acrylic", "Wood And Canvas"],
    "frame": ["Without Frame", "Wooden", "As per requirement"],
    "style": ["Modern", "Hanging", "Tabletop", "Floor"],
    "packingType": ["Box"]
}
*/
router.post('/addVariant', userMiddleware.varifyToken, async (req, res) => {
    try {
        const obj = req.body;
        obj.fieldName = "ProjectVarient";
        obj.updatedDate = new Date();

        let project = await Project.Variant.findOneAndUpdate({ fieldName: "ProjectVarient" }, obj, { new: true, upsert: true });
        if (project) {
            res.json({
                success: true,
                data: project
            });
        };
    } catch (error) {
        res.send(error);
    }
});

// router.put('/updateVariant/:id', (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     Project.Variant.findOneAndUpdate({ _id: id }, body, (err, data) => {
//         if (err) {
//             res.send(err.message);
//         } else {
//             res.json(data);
//         }
//     });
// });

// Get all wishlist Based on User Id
router.get('/getProjectByUser/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const aggregate = [
            {
                $match: {
                    userId: ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: 'feedbacks',
                    localField: '_id',
                    foreignField: 'projectId',
                    as: 'feedback'
                }
            }, {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                }
            }, {
                $lookup: {
                    from: 'users',
                    localField: 'collab',
                    foreignField: '_id',
                    as: 'collab'
                }
            }, {
                $project: {
                    _id: '$_id',
                    userId: '$userId',
                    fname: '$user.fname',
                    lname: '$user.lname',
                    collab: '$collab',
                    projectName: '$projectName',
                    category: '$category',
                    subCategory: '$subCategory',
                    projectType: '$projectType',
                    location: '$location',
                    size: '$size',
                    price: '$price',
                    color: '$color',
                    rarity: '$rarity',
                    waysToBuy: '$waysToBuy',
                    buyFrom: '$buyFrom',
                    projectImage: '$projectImage',
                    createdDate: '$createdDate',
                    status: '$status',
                    feedback: {
                        $cond: {
                            if: { $eq: [{ $size: '$feedback' }, 0] },
                            then: [{}],
                            else: '$feedback'
                        }
                    }
                }
            },
            { $unwind: '$feedback' },
            { $unwind: '$fname' },
            { $unwind: '$lname' },
            {
                $group: {
                    _id: '$_id',
                    userId: { $first: '$userId' },
                    fname: { $first: '$fname' },
                    lname: { $first: '$lname' },
                    collab: { $first: '$collab' },
                    projectName: { $first: '$projectName' },
                    category: { $first: '$category' },
                    subCategory: { $first: '$subCategory' },
                    projectType: { $first: '$projectType' },
                    location: { $first: '$location' },
                    size: { $first: '$size' },
                    price: { $first: '$price' },
                    color: { $first: '$color' },
                    rarity: { $first: '$rarity' },
                    waysToBuy: { $first: '$waysToBuy' },
                    buyFrom: { $first: '$buyFrom' },
                    projectImage: { $first: '$projectImage' },
                    like: {
                        $sum: { $cond: ['$feedback.like', 1, 0] }
                    },
                    share: {
                        $sum: { $cond: ['$feedback.share', 1, 0] }
                    },
                    createdDate: {
                        $first: '$createdDate'
                    },
                    status: {
                        $first: '$status'
                    }
                }
            }, {
                $unset: ['collab.password', 'collab.emailVerified', 'collab.phoneVerified', 'collab.status', 'collab.role',
                    'collab.email', 'collab.phone', 'collab.countryCode', 'collab.updatedDate', 'collab.createdDate', 'collab.securityCode'
                ]
            }
        ];

        const project = await Project.Category.aggregate(aggregate);
        if (project) {
            res.json({
                success: true,
                data: project
            });
        };
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;