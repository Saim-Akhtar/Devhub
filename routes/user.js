const router=require('express').Router();

const userController=require('../controllers/user')

router.get('/:username',userController.fetchUser)

router.get('/:username/repos',userController.fetchRepos)

router.get('/:username/followers',userController.fetchFollowers)

router.get('/:username/following',userController.fetchFollowing)

router.get("/:username/starred_repos",userController.fetchStarredRepos)
module.exports=router