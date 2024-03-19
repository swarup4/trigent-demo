const express = require('express');
const multer = require('multer');

const Product = require('./models');
const productMiddleware = require('../../middleware/product');
const userMiddleware = require('../../middleware/user');
// const uploadMiddleware = require('../../middleware/uploadImage');

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

router.get('/getAllProduct', async (req, res) => {
    // let aggregate = [
    //     {
    //         $lookup: {
    //             from: 'feedbacks',
    //             localField: '_id',
    //             foreignField: 'productId',
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
    //             productName: '$productName',
    //             category: '$category',
    //             subCategory: '$subCategory',
    //             productType: '$productType',
    //             location: '$location',
    //             size: '$size',
    //             price: '$price',
    //             color: '$color',
    //             rarity: '$rarity',
    //             waysToBuy: '$waysToBuy',
    //             buyFrom: '$buyFrom',
    //             productImage: '$productImage',
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
    //             productName: { $first: '$productName' },
    //             category: { $first: '$category' },
    //             subCategory: { $first: '$subCategory' },
    //             productType: { $first: '$productType' },
    //             location: { $first: '$location' },
    //             size: { $first: '$size' },
    //             price: { $first: '$price' },
    //             color: { $first: '$color' },
    //             rarity: { $first: '$rarity' },
    //             waysToBuy: { $first: '$waysToBuy' },
    //             buyFrom: { $first: '$buyFrom' },
    //             productImage: { $first: '$productImage' },
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
        // let product = await Product.Category.aggregate(aggregate);
        const product = await Product.Category.find();
        console.log(product.length)
        res.json(product);
    } catch (error) {
        res.send(error);
    }
});

router.get('/getProduct', async (req, res) => {
    // let aggregate = [
    //     {
    //         $lookup: {
    //             from: 'feedbacks',
    //             localField: '_id',
    //             foreignField: 'productId',
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
    //             productName: '$productName',
    //             category: '$category',
    //             subCategory: '$subCategory',
    //             productType: '$productType',
    //             location: '$location',
    //             size: '$size',
    //             price: '$price',
    //             color: '$color',
    //             rarity: '$rarity',
    //             waysToBuy: '$waysToBuy',
    //             buyFrom: '$buyFrom',
    //             productImage: '$productImage',
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
    //             productName: { $first: '$productName' },
    //             category: { $first: '$category' },
    //             subCategory: { $first: '$subCategory' },
    //             productType: { $first: '$productType' },
    //             location: { $first: '$location' },
    //             size: { $first: '$size' },
    //             price: { $first: '$price' },
    //             color: { $first: '$color' },
    //             rarity: { $first: '$rarity' },
    //             waysToBuy: { $first: '$waysToBuy' },
    //             buyFrom: { $first: '$buyFrom' },
    //             productImage: { $first: '$productImage' },
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
        // let product = await Product.Category.aggregate(aggregate);
        const product = await Product.Category.find(filter);
        res.json(product);
    } catch (error) {
        res.send(error);
    }
});

/* 
{
    "userId": "609ab05eabddac700c9e5420",
    "collab": "609ab05eabddac700c9e5420",
    "productName": "The Abstract Ocean Bubble 100% Hand Painted Wall Painting (With Outer Floater frame)",
    "category": "Art",
    "subCategory": "Prints",
    "productType": "Photography",
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
router.post('/addProduct', userMiddleware.varifyToken, async (req, res) => {
    try {
        const model = new Product.Category(req.body);
        const product = await model.save();
        if (product) {
            res.json({
                success: true,
                message: 'Add Product Data'
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateProduct/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const product = await Product.Category.findOneAndUpdate({ _id: id }, body);
        if (product) {
            res.json({
                success: true,
                data: product
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deleteProduct/:id', userMiddleware.varifyToken, productMiddleware.deleteProductDetails, productMiddleware.deleteProductReview, async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.Category.findOneAndDelete({ _id: id });
        if (product) {
            res.json({
                success: true,
                data: product
            });
        };
    } catch (error) {
        res.send(error);
    }
});


// Product Details
router.get('/productDetails/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.Details.find({ productId: productId });
        if (product) {
            res.json({
                success: true,
                data: product
            });
        };
    } catch (error) {
        res.send(error);
    }
});

/*
{
    productId: 609946fdba377359532041ca,
    productDescription: "String"
}
*/
router.post('/addProductDetails', userMiddleware.varifyToken, async (req, res) => {
    try {
        let model = new Product.Details(req.body);
        let product = await model.save();
        if (product) {
            res.json({
                success: true,
                message: 'Product Details Add into database'
            });
        }
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateProductDetails/:id', userMiddleware.varifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const product = await Product.Details.findOneAndUpdate({ _id: id }, body);
        if (product) {
            res.json({
                success: true,
                data: product
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.post('/addProductImage', userMiddleware.varifyToken, upload.single("product"), productMiddleware.uploadProductImage);

router.post('/uploadProductImage', userMiddleware.varifyToken, async (req, res) => {
    try {
        let model = new Product.Image(req.body);
        let product = await model.save();
        if (product) {
            res.json({
                success: true,
                message: 'Product Images uploaded successfully into Database'
            });
        }
    } catch (error) {
        res.send(error);
    }
});


router.get('/getVariant', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.Variant.findOne({ _id: id });
        if (product) {
            res.json({
                success: true,
                data: product
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
        obj.fieldName = "ProductVarient";
        obj.updatedDate = new Date();

        let product = await Product.Variant.findOneAndUpdate({ fieldName: "ProductVarient" }, obj, { new: true, upsert: true });
        if (product) {
            res.json({
                success: true,
                data: product
            });
        };
    } catch (error) {
        res.send(error);
    }
});

// router.put('/updateVariant/:id', (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     Product.Variant.findOneAndUpdate({ _id: id }, body, (err, data) => {
//         if (err) {
//             res.send(err.message);
//         } else {
//             res.json(data);
//         }
//     });
// });

// Get all wishlist Based on User Id
router.get('/getProductByUser/:userId', async (req, res) => {
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
                    foreignField: 'productId',
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
                    productName: '$productName',
                    category: '$category',
                    subCategory: '$subCategory',
                    productType: '$productType',
                    location: '$location',
                    size: '$size',
                    price: '$price',
                    color: '$color',
                    rarity: '$rarity',
                    waysToBuy: '$waysToBuy',
                    buyFrom: '$buyFrom',
                    productImage: '$productImage',
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
                    productName: { $first: '$productName' },
                    category: { $first: '$category' },
                    subCategory: { $first: '$subCategory' },
                    productType: { $first: '$productType' },
                    location: { $first: '$location' },
                    size: { $first: '$size' },
                    price: { $first: '$price' },
                    color: { $first: '$color' },
                    rarity: { $first: '$rarity' },
                    waysToBuy: { $first: '$waysToBuy' },
                    buyFrom: { $first: '$buyFrom' },
                    productImage: { $first: '$productImage' },
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

        const product = await Product.Category.aggregate(aggregate);
        if (product) {
            res.json({
                success: true,
                data: product
            });
        };
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;