const mongoose = require("mongoose");

const connectDB = async () => {
  try {

  const conn = await mongoose.connect("mongodb+srv://shishujsrsidh:MYjytQpDrpvKAHFo@cluster0.jz8o0jn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
