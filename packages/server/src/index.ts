import { sessionRouter } from "./items/Session.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

const express = require("express");
const mongoose = require("mongoose");  //TODO: change to redis
const cors = require("cors");
const dotenv = require("dotenv").config();



//убрать
mongoose.connect(`mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cinema-app-cluster.ldyyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})


if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();





app.use(express.json());
app.use(cors());
app.use("/api/menu/items", sessionRouter);  //TODO items ли?

app.use(errorHandler);
app.use(notFoundHandler);


app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
);