import mongoose from "mongoose";

const Users = new mongoose.Schema({
    f_name: {type: String, required: true},
    l_name: {type: String, required: true},
    status: {type: Number, min: 0, max: 3},
    personal_status: {type: String},
    subscribers: [],
    subscribes: []
})
export default mongoose.model('Users', Users);