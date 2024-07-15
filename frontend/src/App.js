import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RecipeSearch from "./components/RecipeSearch";
import About from "./components/About";
import Footer from "./components/Footer";
import RecipeDetails from "./components/RecipeDetails";

function App() {
    return (
        <div className="flex flex-col">
            <Router>
                <nav className="mx-4 bg-white items-center p-4">
                    <div className="flex flex-row items-center space-x-8">
                        <Header />
                        <NavBar />
                    </div>
                </nav>
                <main className="flex-1 container mx-auto p-4">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<RecipeSearch />} />
                        <Route path="/recipe/:id" element={<RecipeDetails/>} />
                    </Routes>
                </main>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
