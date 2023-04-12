const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function editExercise(){
    return router.put(
        "/:id", 
        (async (req, res) => {
            try {
                const reqDoc = db.collection("Exercise").doc(req.params.id);
                await reqDoc.update({
                    name: req.body.name,
                    intro: req.body.intro,
                    question: req.body.question,
                    answer: req.body.answer,
                });

                return res.status(200).send({ status: "Sucess", msg: "Data Updated" });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = editExercise;