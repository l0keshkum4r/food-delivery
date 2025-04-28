import foodModel from "../models/foodModel.js";
import fs from 'fs'

// ADD FOOD ITEM
export const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
        location:req.body.location,
        restaurant:req.body.restaurant
    })
    try {
        await food.save();
        res.json({success:true, message:"Food added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Food not added"})
    }
}

// ALL FOOD LIST
export const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error in list food"})
    }
}

// REMOVE FOOD ITEM
export const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error in food remove"})
    }
}
