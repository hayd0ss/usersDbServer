const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://t3_db_admin:t3C2CPassw0rd@t3cluster.lblzv4d.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if (err) throw err;
});

const collection = client.db("vc_c2c_vinyls_db").collection("vcVinylCollection");

module.exports = { collection, ObjectId }

