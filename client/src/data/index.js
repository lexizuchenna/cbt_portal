const questions = [
  {
    q: "What is your name",
    id: 1,
    options: [
      { letter: "A", answer: "1984", isTrue: false },
      { letter: "B", answer: "The old man and the sea", isTrue: false },
      { letter: "C", answer: "The catcher and the rye", isTrue: true },
      { letter: "D", answer: "To kill a mockingbird", isTrue: false },
    ],
  },
  {
    q: "What is your class",
    id: 2,
    options: [
      { letter: "A", answer: "Grade 3", isTrue: false },
      { letter: "B", answer: "Grade 4", isTrue: true },
      { letter: "C", answer: "Grade 5", isTrue: false },
      { letter: "D", answer: "Grade 6", isTrue: false },
    ],
  },
  {
    q: "Are you mad?",
    id: 3,
    options: [
      { letter: "A", answer: "Maybe", isTrue: false },
      { letter: "B", answer: "No", isTrue: true },
      { letter: "C", answer: "Yes", isTrue: false },
      { letter: "D", answer: "Ok", isTrue: false },
    ],
  },
  {
    q: "Shey you go dey for me?",
    id: 4,
    options: [
      { letter: "A", answer: "Go and get money", isTrue: true },
      { letter: "B", answer: "No", isTrue: false },
      { letter: "C", answer: "Yes", isTrue: false },
      { letter: "D", answer: "Ok", isTrue: false },
    ],
  },
  {
    q: "What is meaning of HTML",
    id: 5,
    options: [
      { letter: "A", answer: "Hyper Text Markup Language", isTrue: true },
      { letter: "B", answer: "Hyper Transforming Media Log", isTrue: false },
      { letter: "C", answer: "High Translative Machine Language", isTrue: false },
      { letter: "D", answer: "None of the above", isTrue: false },
    ],
  },
  {
    q: "HTML a programming language",
    id: 6,
    options: [
      { letter: "A", answer: "True", isTrue: false },
      { letter: "B", answer: "False", isTrue: true },
      { letter: "C", answer: "All of the above", isTrue: false },
      { letter: "D", answer: "None of the above", isTrue: false },
    ],
  },
];

const questionData = {
  time: {
    hours: parseInt("00", 10),
    minutes: parseInt("00", 10),
    seconds: parseInt("30", 10),
  },
  point: 5,
  questions,
};

const data = {
  questionData,
};

export default data;
