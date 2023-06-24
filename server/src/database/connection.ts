import { Pool } from "pg";

const connectionData = {
    user: "postgres",
    host: "192.168.0.101",
    database: "senseicodedb",
    password: "s102839!",
    port: 5432
}

const pool = new Pool(connectionData);

pool.connect((err, client, done)=>{
  if (err) {
    console.error("Database connection error!!!")
    throw new Error(err.message)
  } else {
    console.log(`Connection to the database with config ${JSON.stringify(connectionData)} was successful`)
  }
})

export default pool;

