// src/api.js
const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req,res) => {
	

});

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});

module.exports = app;


