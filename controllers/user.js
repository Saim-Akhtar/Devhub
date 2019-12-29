const fetch=require('node-fetch')

const github_api='https://api.github.com'


module.exports={
    fetchUser:async(req,res,next)=>{
        const username=req.params.username
        try {
            
            const result=await fetch(`${github_api}/users/${username}`)
            const data=await result.json()
          
          const {id,login,avatar_url,html_url,followers,
            following,starred_url,name,repos_url,email,public_repos,location}=data
            const user={id,login,avatar_url,html_url,followers,
                following,starred_url,name,repos_url,email,public_repos,location}
          res.status(200).json({user:user})
        } 
        catch (error) {
            res.status(404).json({
                error:error.message
            })
        }
    },
    fetchRepos:async(req,res,next)=>{
        const username=req.params.username
        
        try {
            const result=await fetch(`${github_api}/users/${username}/repos?per_page=1000`)
            const data=await result.json()
          const repos=data.filter(repo=>repo.owner.login === username).map(repo=>{
            const repoName=repo.full_name
            const index=repoName.indexOf('/')+1
          return repoName.slice(index)
          })
          res.status(200).json({
              total:repos.length,
              repos:repos.sort()
            })
        } 
        catch (error) {
            res.status(404).json({
                error:error.message
            })
        }
    },
    fetchFollowers:async(req,res,next)=>{
        const username=req.params.username
        const hostURL=`${req.protocol}://${req.get('host')}`
        try {
            const result=await fetch(`${github_api}/users/${username}/followers?per_page=100`)
            const data=await result.json()
            const followers=data.map(user=>(
                {user_name:user.login,img:user.avatar_url,
                github_url:user.html_url,repos_url:`${hostURL}/user/${user.login}/repos`}
                )
            )
          res.status(200).json({
              total:followers.length,
              followers:followers
            })
        } 
        catch (error) {
            res.status(404).json({
                error:error.message
            })
        }
    },
    fetchFollowing:async(req,res,next)=>{
        const username=req.params.username
        const hostURL=`${req.protocol}://${req.get('host')}`
        
        try {
            const result=await fetch(`${github_api}/users/${username}/following?per_page=100`)
            const data=await result.json()
            const following=data.map(user=>(
                {user_name:user.login,img:user.avatar_url,
                github_url:user.html_url,repos_url:`${hostURL}/user/${user.login}/repos`}
                )
            )
          res.status(200).json({
              total:following.length,
              following:following
            })
        } 
        catch (error) {
            res.status(404).json({
                error:error.message
            })
        }
    },
    fetchStarredRepos:async(req,res,next)=>{
        const username=req.params.username
        const hostURL=`${req.protocol}://${req.get('host')}`
        try {
            const result=await fetch(`${github_api}/users/${username}/starred?per_page=1000`)
            const data=await result.json()
            
            const repos=data.map(repo=>(
                {repo_name:repo.name,
                repo_owner:{
                  user_name:repo.owner.login,
                  url: `${hostURL}/user/${repo.owner.login}`  
                },
                github_url:repo.html_url,
                stars:repo.stargazers_count
            }
            ))

          res.status(200).json({
              total:repos.length,
              starred_repos:repos
            })
        } 
        catch (error) {
            res.status(404).json({
                error:error.message
            })
        }
    }
}