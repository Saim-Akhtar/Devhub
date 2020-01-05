const passport = require('passport')
const GithubTokenStrategy=require('passport-github-token');

passport.use(new GithubTokenStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // passReqToCallback: true
}, async(accessToken, refreshToken, profile, next)=> {
        console.log('profile', profile);
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        next(null,profile)
}));


