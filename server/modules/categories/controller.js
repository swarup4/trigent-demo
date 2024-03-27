const express = require('express');
const multer = require('multer');

const Category = require('./models');
// const projectMiddleware = require('../../middleware/project');
const userMiddleware = require('../../middleware/user');
// const uploadMiddleware = require('../../middleware/uploadImage');

const router = express.Router();


router.get('/getFilter', async (req, res) => {
    try {
        const data = await Category.Category.aggregate([
            {
                $lookup: {
                    from: "subcategories",
                    localField: "options",
                    foreignField: "_id",
                    as: "subCategory",
                },
            }, {
                $unset: ["options", "createdAt", "updatedAt", "status"],
            }, {
                $project: {
                    name: "$name",
                    subCategory: {
                        $reduce: {
                            input: "$subCategory",
                            initialValue: [],
                            in: {
                                $concatArrays: ["$$value",
                                    [{
                                        $mergeObjects: ["$$this", {
                                            checked: false,
                                        }]
                                    }]
                                ]
                            }
                        }
                    }
                }
            }
        ]);
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.get('/getCategory', async (req, res) => {
    try {
        const data = await Category.Category.find();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});
router.get('/getCategoryById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const data = await Category.Category.find({ _id: id});
        res.json(data[0]);
    } catch (error) {
        res.send(error);
    }
});


// Category
router.post('/addCategory', async (req, res) => {
    try {
        const model = new Category.Category(req.body);
        const cate = await model.save();
        console.log(cate);
        if (cate) {
            res.json(cate);
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateCategory/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const cate = await Category.Category.findOneAndUpdate({ _id: id }, body);
        if (cate) {
            res.json({
                success: true,
                data: cate
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/mapSubCategory/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body.subCategory;
        console.log(body);
        // const cate = await Category.Category.findOneAndUpdate({ _id: id }, {options: body});
        // if (cate) {
        //     res.json({
        //         success: true,
        //         data: cate
        //     });
        // };
    } catch (error) {
        res.send(error);
    }
    

    // let arr = [];
    // for (const i of body) {
    //     const cate = Category.Category.updateOne({ _id: id }, { $push: { options: i } });
    //     arr.push(cate);
    // }
    // Promise.allSettled(arr).then(data => {
    //     res.json(data);
    // }).catch(err => {
    //     res.send(err);
    // });
});

router.delete('/deleteCategory/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Category.Category.findOneAndDelete({ _id: id });
        if (data) {
            res.json({
                success: true,
                message: 'Delete Category'
            });
        };
    } catch (error) {
        res.send(error);
    }
});


// Sub Category
router.get('/getSubCategory', async (req, res) => {
    try {
        const data = await Category.SubCategory.find();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});
router.post('/addSubCategory', async (req, res) => {
    try {
        const model = new Category.SubCategory(req.body);
        const data = await model.save();
        if (data) {
            res.json(data);
        };
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateSubCategory/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const cate = await Category.SubCategory.findOneAndUpdate({ _id: id }, body);
        if (cate) {
            res.json({
                success: true,
                data: cate
            });
        };
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deleteSubCategory/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Category.SubCategory.findOneAndDelete({ _id: id });
        if (data) {
            res.json({
                success: true,
                message: 'Delete Category'
            });
        };
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;