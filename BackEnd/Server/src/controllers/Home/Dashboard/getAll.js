const { query } = require("express");
const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function getAllDashboard(){
    return router.get(
        "/", 
        (async (req, res) => {
            try {
                const query = db.collection("Dashboard");
                let response = [];

                await query.get().then((data) => {
                    let docs = data.docs;

                    docs.map((doc) => {
                        const selectedItem = {
                            id: doc.data().id,
                            name: doc.data().name,
                            theory: doc.data().theory,
                            declare: doc.data().declare,
                            example: doc.data().example,
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

module.exports = getAllDashboard;