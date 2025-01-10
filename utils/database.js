import mongoose from 'mongoose';

let isConnected = false; //tracking connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('Mongo connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })

        isConnected = true;

        console.log("Mongo Connected")
    } catch (error) {
        console.log(error);
    }
}