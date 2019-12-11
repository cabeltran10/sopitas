const MongoClient = require("mongodb").MongoClient;

const MyMongoLib = function() {
  const MyMongoLib = this || {};

  // Connection URL
  const url = process.env.MONGO_URI || "mongodb://localhost:27017";
  // Database Name
  const dbName = "sopitas";
  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });
  let conn = MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  MyMongoLib.getDocs = () =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        // Insert a single document
        const testCol = db.collection("inserts");

        return testCol
          .find({})
          .limit(20)
          .toArray()
          .then(resolve)
          .catch(reject);
      });
    });

  MyMongoLib.getVarieties = () =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        // Insert a single document
        const testCol = db.collection("flavors");

        return testCol
          .find({})
          .limit(20)
          .toArray()
          .then(resolve)
          .catch(reject);
      });
    });

  MyMongoLib.getOrders = user_p =>
  new Promise((resolve, reject) => {
    // Use connect method to connect to the Server
    client.connect((err, client) => {
      if (err !== null) {
        reject(err);
        return;
      }
      console.log("Connected correctly to server");

      const db = client.db(dbName);

      // Insert a single document
      const testCol = db.collection("orders");
      if(user_p){
        return testCol
        .find({user:user_p})
        .limit(20)
        .toArray()
        .then(resolve)
        .catch(reject);
      }
      else{
        return testCol
        .find()
        .limit(20)
        .toArray()
        .then(resolve)
        .catch(reject);
      }

    });
  });

  MyMongoLib.sendOrder = (req, res) =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect((err, client) => {
        if (err !== null) {
          reject(err);
          return;
        }
        console.log("Connected correctly to server");
        if(req.body["flavors"].length>0){

        const db = client.db("sopitas");

        // Insert a single document
        const testCol = db.collection("orders");
        var id=0
        a= testCol.find({user:req.body["user"]}, (err,result)=>{
          for(const act in result.body){
            if((act["date"]-new Date()/1000<=100)){
              console.log("e")
              id=act["date"]
             // return
            }
          }
          if(id!=0)
          {
            return testCol.findOneAndReplace({date:id},req.body, (err, result)=> {
              if (err) return res.status(400).json({ message: err.message });

              res.status(201).json(req.body);}
            )
          }
          else{
            return testCol.insert(req.body, (err, result) => {
              if (err) return res.status(400).json({ message: err.message });

              res.status(201).json(req.body);
            });
          }


        }
        )



        }
      });
    });

  MyMongoLib.listenToChanges = cbk => {
    client.connect((err, client) => {
      if (err !== null) {
        throw err;
      }
      console.log("Connected correctly to server");

      const db = client.db(dbName);

      // Insert a single document
      const testCol = db.collection("inserts");

      const csCursor = testCol.watch();

      csCursor.on("change", data => {
        console.log("changed!", data);
        MyMongoLib.getDocs().then(docs => cbk(JSON.stringify(docs)));
      });
    });
  };

  return MyMongoLib;
};

module.exports = MyMongoLib;
