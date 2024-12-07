import mongoose  from "mongoose";
mongoose.connect("mongodb+srv://simonpaul496:m8MFa61EBtehzBaK@cluster0.a8zuj.mongodb.net/brainely");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String,unique:true},
    password:String
})



export const userModel = mongoose.model('users',userSchema);




