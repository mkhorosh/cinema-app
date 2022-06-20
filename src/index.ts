import { authRouter } from "./common/routers/Auth.router";
import { sessionRouter } from "./common/routers/Session.router";
import { userRouter } from "./common/routers/Users.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

if (!process.env.PORT) {
  process.exit(1);
}

const CosmosClient = require("@azure/cosmos").CosmosClient;
const cosmosClient = new CosmosClient({
  endpoint: process.env.BD_ENDPOINT,
  key: process.env.BD_KEY,
});

const database = cosmosClient.database(process.env.BD_NAME);
export const sessionContainer = database.container("Items");
export const userContainer = database.container("Users");

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(cors());
app.use("/sessions", sessionRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
