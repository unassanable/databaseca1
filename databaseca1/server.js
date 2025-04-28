const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://zavianalams70:Naruto123@cluster0.8t02gow.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection failed:', err));

const ResturantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {type: String, required: true}
});
const Resturant = mongoose.model('Resturant', ResturantSchema);

const MenuItemSchema = new mongoose.Schema({
    Menu_Items: {type: [String]},
    Dish_name: {type: String, required: true},
    Cost: {type:Number, required: true}
})
mongoose.exports = Resturant
app.listen(3000, () => console.log('Server running on port 3000'));