const router=require('express').Router();
const passport=require('passport')

require('../middleware/passport')

const chatController=require('../controllers/chats')

router.get('/',passport.authenticate('jwt',{session:false}),chatController.getAllChats)

router.get('/:roomId',passport.authenticate('jwt',{session:false}),chatController.getChat)

module.exports=router