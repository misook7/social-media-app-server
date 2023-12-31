import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    firstName: {
        typpe: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        typpe: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        typpe: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        typpe: String,
        required: true,
        min: 5,
    },
    picturePath: {
        type: String,
        default: "",
    },
    friends: {
        type: Array,
        default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}, {
    timestamps: true
});

const user = mongoose.model('User', UserSchema);
export default user;