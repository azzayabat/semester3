var admin = require("firebase-admin");
var serviceAccount = require("./notification-60577-firebase-adminsdk-b59n9-3f65d3a24c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  notification: { title: "Notification", body: "Testing" },
  topic: "dailyNews",
};

admin
  .messaging()
  .send(message)
  .then((res) => console.log("success", res))
  .catch((err) => {
    console.log("error", err);
  });
