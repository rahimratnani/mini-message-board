import express from "express";

const indexRouter = express.Router();

const messages = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi voluptatem, quam velit suscipit dolores harum.",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Amet minus eius ab harum quam qui commodi placeat? Eligendi iure aut culpa illum!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages, title: "Home | Messages" });
});

indexRouter.get("/new", (req, res) => {
  res.render("new", { title: "Write Message" });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  console.log(messages);

  res.redirect("/");
});

export default indexRouter;
