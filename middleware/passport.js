const mongoose=require('mongoose')
const passport = require('passport')
const GithubTokenStrategy=require('passport-github-token');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const User=require('../models/user');

passport.use(new GithubTokenStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // passReqToCallback: true
}, async(accessToken, refreshToken, profile, done)=> {
    try{    
    console.log('profile', profile._json);
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        
            const existingUser = await User.findOne({ "github.id": profile.id });
            if (existingUser) {
                return done(null, existingUser);
            }
    
            const newUser = new User({
                _id: mongoose.Types.ObjectId(),
                gitub: {
                    id: profile.id,
                    userName:profile.username,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                },
                    profilePic:profile._json.avatar_url,
                    email:profile._json.email,
                    location:profile._json.location,
            });
    
            await newUser.save();
            done(null, newUser);
        }  
     catch (error) {
        done(error, false, error.message);
    }
}));


