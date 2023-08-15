
import mongoose from 'mongoose';
 const connectToDatabase = async () => {
    
    try {
        mongoose.set('strictQuery',false);
        const connect = await mongoose.connect(process.env.MANGO_URI,{
            
            useNewUrlParser:true,
           

        });
        console.log(`MangoDM is connected : ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
};

export default connectToDatabase;
