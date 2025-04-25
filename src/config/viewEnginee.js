import express from "express";

let configViewEnginee = (app) => {
    app.use(express.static("./src/public"));
    app.set("view enginee", "ejs");
    app.set("views", "./src/views")
}

module.exports = configViewEnginee;