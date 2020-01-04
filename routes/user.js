const router=require('express').Router();

const userController=require('../controllers/user')

router.get('/:username',userController.fetchUser)

router.get('/:username/repos',userController.fetchRepos)

router.get('/:username/followers',userController.fetchFollowers)

router.get('/:username/following',userController.fetchFollowing)

router.get("/:username/starred_repos",userController.fetchStarredRepos)

router.get('/:username/repos/:reponame',userController.fetchARepo)

router.get('/:username/repos/:reponame/stargazers',userController.fetchStarGazers)

router.get('/:username/repos/:reponame/forks',userController.fetchForks)

module.exports=router