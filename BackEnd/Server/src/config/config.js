const bodyParser = require ("body-parser");
const cors = require ("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chatbot-a37f4-default-rtdb.firebaseio.com"
});

function serverInit(app){
  app.use(
    cors({
      origin: "*",
    })
  );

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.get("/", (req, res) => {
    return res.status(200).send("Express + TypeScript Server");
  });

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running on PORT ${PORT}`);
  });
};

module.exports = serverInit;