const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
// Parsing Body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


// getting routes 
const userRoute=require('./routes/user')

// Setting url Routes
app.use('/user',userRoute)

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