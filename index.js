const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; //aplication port

app.use(bodyParser.json());

//mail vaildation

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
 app.post("/validate-email"), (req, res) => {
    const {email} = req.body;

    if (!email) {
        return res.status(400).json({message : " Eamail is required"});
    }
    const isValid = validateEmail(email);

    return res.json({
        email, valid: isValid,
    });
 };
 app.listen(PORT, () => {
    console.log(`Email validator is running on port ${PORT}`);
  });