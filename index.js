import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/all_tasks", (req, res) => {
    res.render("all_task.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});