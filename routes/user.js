const router=require('express').Router();
const passport=require('passport')

const userController=require('../controllers/user')

require('../middleware/passport');

router.get('/',userController.fetchAllUsers)

router.get('/:username',userController.fetchUser)

router.get('/:username/repos',userController.fetchRepos)

router.get('/:username/followers',userController.fetchFollowers)

router.get('/:username/following',userController.fetchFollowing)

router.get("/:username/starred_repos",userController.fetchStarredRepos)

router.get('/:username/repos/:reponame',userController.fetchARepo)

router.get('/:username/repos/:reponame/stargazers',userController.fetchStarGazers)

router.get('/:username/repos/:reponame/forks',userController.fetchForks)

router.patch('/:userId',userController.updateUser)

router.patch('/:userId/experience',userController.addExperience)

router.patch('/:userId/experience/:experienceId',userController.deleteExperience)

router.post('/login/getToken',userController.getToken)

router.post('/login/github',passport.authenticate('github-token', { session: false }),userController.login)


module.exports=router