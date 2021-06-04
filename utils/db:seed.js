require("dotenv").config();

const mongoose = require("mongoose");
const Todo = require("../models/todo.model");

const dummyData = [
  { test: "Eat sushi", done: true },
  { test: "Buy toothbrush", done: true },
  { test: "Learn Deno", done: true },
];

mongoose
  .connect(process.env.MONGODB_URL_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(async () => {
    await Todo.insertMany(dummyData);
  })
  .then(() => mongoose.connection.close());
