import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Navbare from './Component/Navbare/Navbare';
import Form from './pages/Formlog/Form';
import Login from "./pages/FormLogin/Login";
import Frelancer from './pages/Pfreelencer/Frelancer';
import Home from './pages/Home/Home';
import Checkout from './Component/Service_Form/Checkout';
import Chat from './Component/Chat/Chat';
import Footer from './Component/Footer/Footer';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
          <Navbare />
          <div style={{ overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Pfrelancer" element={<Frelancer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Form />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/chat" element={<Chat />} />
              {/* Ajouter Outlet à la fin des routes pour afficher les routes enfants */}
              <Route element={<Outlet />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
