const express = require ("express");
const app = express();
const serverInit = require("../config/config");

const addDashboard = require("../controllers/Admin/Dashboard/add");
const editAllDashboard = require("../controllers/Admin/Dashboard/editAll");
const editName = require("../controllers/Admin/Dashboard/editName");
const editTheory = require("../controllers/Admin/Dashboard/editTheory");
const editDeclare = require("../controllers/Admin/Dashboard/editDeclare");
const editExample = require("../controllers/Admin/Dashboard/editExample");
const delDashboard = require("../controllers/Admin/Dashboard/del.js");

const addExercise = require("../controllers/Admin/Exercise/add");
const editAllExercise = require("../controllers/Admin/Exercise/editAll");
const editQuestion = require("../controllers/Admin/Exercise/editQuestion");
const editIntro = require("../controllers/Admin/Exercise/editIntro");
const editNameExercise = require("../controllers/Admin/Exercise/editNameExercise");
const editAnswer = require("../controllers/Admin/Exercise/editAnswer");
const delExercise = require("../controllers/Admin/Exercise/del");

const getDashboard = require("../controllers/Home/Dashboard/getDashboard");
const getAllDashboard = require("../controllers/Home/Dashboard/getAll");

const getExercise = require("../controllers/Home/Exercise/getExercise");
const getAllExercise = require("../controllers/Home/Exercise/getAll");

function route() {
    serverInit(app);

    // Admin
    // Dashboard
    app.use("/admin/dashboard/add", addDashboard());
    app.use("/admin/dashboard/editAll", editAllDashboard());
    app.use("/admin/dashboard/editName", editName());
    app.use("/admin/dashboard/editTheory", editTheory());
    app.use("/admin/dashboard/editDeclare", editDeclare());
    app.use("/admin/dashboard/editExample", editExample());
    app.use("/admin/dashboard/del", delDashboard());
    
    // Exercise
    app.use("/admin/exercise/editNameExercise", editNameExercise());
    app.use("/admin/exercise/add", addExercise());
    app.use("/admin/exercise/editAll", editAllExercise());
    app.use("/admin/exercise/editQuestion", editQuestion());
    app.use("/admin/exercise/editIntro", editIntro());
    app.use("/admin/exercise/editAnswer", editAnswer());
    app.use("/admin/exercise/del", delExercise());

    // Home
    // Dashboard
    app.use("/home/dashboard/getDashboard", getDashboard());
    app.use("/home/dashboard/getAll", getAllDashboard());

    // Exercise
    app.use("/home/exercise/getExercise", getExercise());
    app.use("/home/exercise/getAll", getAllExercise());
}

module.exports = route;