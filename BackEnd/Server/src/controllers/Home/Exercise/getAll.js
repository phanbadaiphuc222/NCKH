const { query } = require("express");
const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function getAllExercise(){
    return router.get(
        "/", 
        (async (req, res) => {
            try {
                const query = db.collection("Exercise");
                let response = [];

                await query.get().then((data) => {
                    let docs = data.docs;

                    docs.map((doc) => {
                        const selectedItem = {
                            id: doc.data().id,
                            name: doc.data().name,
                            intro: doc.data().intro,
                            question: doc.data().question,
                            answer: doc.data().answer,
                        };

                        response.push(selectedItem);
                    });
                    return response;
                });

                return res.status(200).send({ status: "Sucess", data: response });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = getAllExercise;