const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function addExercise(){
    return router.post(
        "/", 
        (async (req, res) => {
            try {
                await db.collection('Exercise').doc(`/${Date.now()}/`).create({
                    id: Date.now(),
                    name: req.body.name,
                    intro: req.body.intro,
                    question: req.body.question,  
                    answer: req.body.answer,
                });

                return res.status(200).send({ status: "Sucess", msg: "Data Saved" });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = addExercise;