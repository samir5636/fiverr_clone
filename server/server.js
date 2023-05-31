const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs=require("./graphQL/typedefs");
const resolvers=require("./graphQL/resolvers/resolvers");
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fiveer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app=express()
// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then(() => {
  // Start the server
  app.listen({ port: 3000 }, () => {
    console.log(`Server running at http://localhost:3000${server.graphqlPath}`);
  });
});