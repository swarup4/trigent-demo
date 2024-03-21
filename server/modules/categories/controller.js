const express = require('express');
const multer = require('multer');

const Category = require('./models');
// const projectMiddleware = require('../../middleware/project');
const userMiddleware = require('../../middleware/user');
// const uploadMiddleware = require('../../middleware/uploadImage');

const router = express.Router();


router.get('/getFilter', async (req, res) => {
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
    
}
*/

// Category
router.post('/addCategory', async (req, res) => {
    try {
        const model = new Category.Category(req.body);
        const cate = await model.save();
        if (cate) {
            res.json({
                success: true,
                message: 'Add Category'
            });
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
    try {
        const id = req.params.id;
        const body = req.body;
        const cate = await Category.Category.update({ _id: id }, { $push: { options: body } });
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
router.post('/addSubCategory', async (req, res) => {
    try {
        const model = new Category.SubCategory(req.body);
        const data = await model.save();
        if (data) {
            res.json({
                success: true,
                message: 'Add Sub Category'
            });
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

module.exports = router;