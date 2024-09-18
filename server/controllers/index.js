const path = require("path");
const reader = require("xlsx");
const mongoose = require('mongoose')
const Model = require('../models/Questions')
const User = require('../models/User')

const questions = [
  {
    id: 1,
    question: "What is your name",
    A: "1984",
    B: "The old man and the sea",
    C: "The catcher and the rye",
    D: "To kill a mockingbird",
    correct: "The catcher and the rye",
  },
  {
    id: 2,
    question: "What is your class",
    A: "Grade 3",
    B: "Grade 4",
    C: "Grade 5",
    D: "Grade 6",
    correct: "Grade 4",
  },
  {
    id: 3,
    question: "Are you mad?",
    A: "Maybe",
    B: "No",
    C: "Yes",
    D: "Ok",
    correct: "No",
  },
  {
    id: 4,
    question: "Shey you go dey for me?",
    A: "Go and get money",
    B: "No",
    C: "Yes",
    D: "Ok",
    correct: "Go and get money",
  },
  {
    id: 5,
    question: "What is meaning of HTML",
    A: "Hyper Text Markup Language",
    B: "Hyper Transforming Media Log",
    C: "High Translative Machine Language",
    D: "None of the above",
    correct: "Hyper Text Markup Language",
  },
  {
    id: 6,
    question: "HTML a programming language",
    A: "True",
    B: "False",
    C: "All of the above",
    D: "None of the above",
    correct: "False",
  },
];

module.exports = {
  getHome: async (req, res) => {
    // const file = reader.readFile(
    //   path.join(__dirname, "../public/data/" + "file.xlsx")
    // );

    // const ws = reader.utils.json_to_sheet(questions);

    // reader.utils.book_append_sheet(file, ws, "Sheet3");

    // // Writing to our file

    // reader.writeFile(
    //   file,
    //   path.join(__dirname, "../public/data/" + "file.xlsx")
    // );
    const data = await Model.find()
    const data2 = await User.find()
    const data3 = JSON.stringify(questions)
    res.json(data3);
  },
};
