const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function addDashboard(){
    return router.post(
        "/", 
        (async (req, res) => {
            try {
                await db.collection('Dashboard').doc(`/${Date.now()}/`).create({
                    id: Date.now(),
                    name: req.body.name,
                    theory: req.body.theory,
                    declare: req.body.declare,
                    example: req.body.example,
                });

                return res.status(200).send({ status: "Sucess", msg: "Data Saved" });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = addDashboard;