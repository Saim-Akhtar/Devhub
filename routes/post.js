const router=require('express').Router();
const passport=require('passport')

const postController=require('../controllers/post')
router.get('/',postController.getAllPosts)

router.get('/:postId',postController.getPost)

router.post('/add',postController.addPost)

router.put('/:postId/comment',postController.addComment)

module.exports=router