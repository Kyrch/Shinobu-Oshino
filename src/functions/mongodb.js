require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://kyrch:${process.env.passwordMongoDb}@cluster0.0dcxlve.mongodb.net/discord`).then(() => console.log('mongodb connected')).catch(err => console.error(err))
const Schema = mongoose.Schema

// Schemas
const UserSchema = new Schema({
    idDiscord: String,
    anilistName: String,
    steamName: String
})

// Models
const User = mongoose.model('User', UserSchema)

module.exports = {
    mongoose: mongoose,
    schemas: {
        user: UserSchema
    },
    models: {
        user: User
    }
}