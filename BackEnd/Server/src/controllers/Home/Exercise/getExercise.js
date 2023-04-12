const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function getExercise(){
    return router.get(
        "/:id", 
        (async (req, res) => {
            try {
                const reqDoc = db.collection("Exercise").doc(req.params.id);
                let Exercise = await reqDoc.get();
                let response = Exercise.data();

                return res.status(200).send({ status: "Sucess", data: response });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = getExercise;