const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://ANIRUDH:ANI@cargoshipmanagementsyst.kgitmho.mongodb.net/cargo?retryWrites=true&w=majority";



const connectionParams ={
    useNewUrlParser: true,
    useUnifiedTopology:true,
};

mongoose.connect(dbUrl,connectionParams)
.then(() => {
    console.info("Connected to db");
})
.catch((e) => {
    console.log("Error:",e);
});