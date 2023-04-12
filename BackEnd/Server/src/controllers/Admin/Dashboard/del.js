const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function delDashboard(){
    return router.delete(
        "/:id", 
        (async (req, res) => {
            try {
                const reqDoc = db.collection("Dashboard").doc(req.params.id);
                await reqDoc.delete();

                return res.status(200).send({ status: "Sucess", msg: "Data Removed" });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = delDashboard;