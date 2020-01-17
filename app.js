const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');

dotenv.config()
const app=express();
// Parsing Body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://Saim:${process.env.ATLAS_USER_PWD}@devhub-cluster-j1z5m.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
     useUnifiedTopology: true 
})

mongoose.Promise = global.Promise


// getting routes 
const userRoute=require('./routes/user')
const postRoute=require('./routes/post')

// Setting url Routes
app.use('/user',userRoute)
app.use('/posts',postRoute)

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Undefined Route')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 459)
    res.json({
        Error: {
            message: error.message
        }
    })
})

const port=process.env.PORT || 8000

app.listen(port)