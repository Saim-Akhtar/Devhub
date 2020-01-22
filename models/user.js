const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    github:{
        id:{type:String},
        userName:{type:String},
        firstName: { type: String},
        lastName: { type: String},
    },
    email: { type: String},
    location:{type:String},
    profilePic: { type: String, required: true },
    joinedAt:{type: Date,default: new Date().toLocaleDateString() },
    facebookURL:{type: String,default: null},
    twitterURL:{type: String,default: null},
    linkedinURL:{type: String,default: null},
    skillSet:{type:[String],default: []},
    experience:{type:[
        {
            job_title:String,
            location:String,
            company: String,
            startedAt:Date,
            endedAt: Date,
            currentlyWorking:Boolean
        }
    ],default: []}
})

module.exports=mongoose.model('User',userSchema);