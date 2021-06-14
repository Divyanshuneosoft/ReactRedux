const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 2007;
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongodb connected successfully')
    })
    .catch(err => {
        console.log(err)
    })
const postSchema = new mongoose.Schema({
    addedAt: {
        type: Date,
        default: new Date().toISOString()
    }
}, { strict: false })
const Postmodel = mongoose.model('posts', postSchema)
app.post('/api/add', async (req, res) => {
    try {
        var data = new Postmodel(req.body)
        data = await data.save()
    } catch (error) {
        return res.status(503).json({ message: 'Service Unavailable' })
    }
    return res.status(200).json({ message: 'data added successfully', data })
})
app.get('/api/get', async (req, res) => {
    try {
        var data = await Postmodel.find().sort({ '_id': -1 })
    } catch (error) {
        return res.status(503).json({ message: 'Service Unavailable' })
    }
    return res.status(200).json({ message: 'data added successfully', data })
})
app.get('/api/details/:id', async (req, res) => {
    try {
        var data = await Postmodel.findOne({ _id: req.params.id })
        if (!data) {
            return res.status(400).json({ message: 'incorrect information' })

        }
    } catch (error) {
        console.log(error)
        return res.status(503).json({ message: 'Service Unavailable' })
    }
    return res.status(200).json({ message: 'data added successfully', data })
})
app.post('/api/update', async (req, res) => {
    try {
        let updatedData = {};
        Object.keys(req.body).forEach(key => {
            if (key !== 'id') updatedData[key] = req.body[key]
        })
        var data = await Postmodel.findOneAndUpdate({ _id: req.body.id }, { '$set': updatedData },{new:true})
        if (!data) {
            return res.status(400).json({ message: 'incorrect information' })

        }
    } catch (error) {
        console.log(error)
        return res.status(503).json({ message: 'Service Unavailable' })
    }
    return res.status(200).json({ message: 'data updated successfully', data })
})
app.listen(port, () => {
    console.log(`${port} is connected`)
})