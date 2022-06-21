const express = require('express');
const {addBlog,
    deleteBlog,
    allBlogs,
    getById,
    getByUserId,
    updateBlog} = require ("../controllers/blog");
const router = express.Router();

router.route('/').get(allBlogs);
router.route('/add').post(addBlog);
router.route('/update/:id').put(updateBlog);
router.route('/:id').get(getById);
router.route('/:id').delete(deleteBlog);
router.route('/user/:id').get(getByUserId);

module.exports = router;