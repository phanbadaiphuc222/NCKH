const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function delExercise(){
    return router.delete(
        "/:id", 
        (async (req, res) => {
            try {
                const reqDoc = db.collection("Exercise").doc(req.params.id);
                await reqDoc.delete();

                return res.status(200).send({ status: "Sucess", msg: "Data Removed" });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = delExercise;