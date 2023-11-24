import { MongoClient, MongoClientOptions } from "mongodb";
const url =
  "mongodb+srv://admin:admgmlals96@cluster0.azr59cj.mongodb.net/?retryWrites=true&w=majority";
// const options: MongoClientOptions = { useNewUrlParser: true };

declare global {
  var _mongo: MongoClient;
}
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    connectDB = MongoClient.connect(url).then((client) => {
      global._mongo = client;
      return client;
    });
  } else {
    connectDB = Promise.resolve(global._mongo);
  }
} else {
  connectDB = MongoClient.connect(url).then((client) => client);
}

export { connectDB };
