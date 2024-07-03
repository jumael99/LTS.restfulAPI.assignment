import mongoose from 'mongoose';

const manufactureSchema = mongoose.Schema ({
    name: {
        type:String
    },
    country:{
        type:String
    }
})

const ItemSchema = mongoose.Schema({
    name:{
        type:String,
        minLength: 1,
        maxLength:100,
        required:true
    },
    description:{
        type:String,
        maxLength:500,
        required:false
    },
    price:{
        type:Number,

    },
    category:{
        type:String,
        enum: ['electronics', 'clothing', 'books', 'food', 'other']
    },
    inStock: {
        type:Boolean
    },
    tags: {
        type: Array,
        maxLength:5,
        required:false
    },
    manufacturer: {
        manufactureSchema,
        required:false
    }

}, {
    timestamps:true
})

const Item = mongoose.model('Item',ItemSchema);
export default Item;