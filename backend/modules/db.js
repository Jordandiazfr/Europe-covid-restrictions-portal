const {MongoClient} = require("mongodb");
require('dotenv').config()
const uri = process.env.MONGOURI

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


async function main(){
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



 async function select () {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const db = client.db('jojo')
        const collection = db.collection('db1')
        const cursor = collection.find({})
        const data = await cursor.toArray()
        return data
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();

    }
}

module.exports = {
    db: main,
    select: select
}