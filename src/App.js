import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState()

  return (
    <Router>
      <NavBar query={query} setQuery={setQuery} setResult={setResult} />
      <Routes>
        <Route path="/" exact element={<Home query={query} setQuery={setQuery} setResult={setResult} />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
