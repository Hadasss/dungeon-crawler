// added DB
const { MongoClient } = require("mongodb");
const url = `mongodb+srv://app-admin:${process.env.DB_CLUSTER_PASSWORD}@dungeon-crawler.6hshmyb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// const path = require("path");

// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");

// const { typeDefs, resolvers } = require("./schemas");
// const db = require("./config/connection");
// const { authMiddleware } = require("./utils/auth");

// const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log("API server running on port ${PORT}!");
//       console.log(
//         "Use GraphQL at http://localhost:${PORT}${server.graphqlPath}"
//       );
//     });
//   });
// };

// // call the async function to start the server
// startApolloServer(typeDefs, resolvers);
