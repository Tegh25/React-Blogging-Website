import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/React-Blogging-Website/" element={<HomePage />} />
            <Route path="/React-Blogging-Website/about" element={<AboutPage />} />
            <Route path="/React-Blogging-Website/articles" element={<ArticlesListPage />} />
            <Route path="/React-Blogging-Website/articles/:articleId" element={<ArticlePage />} />
            <Route path="/React-Blogging-Website/login" element={<LoginPage />} />
            <Route path="/React-Blogging-Website/create-account" element={<CreateAccountPage />} />
            <Route path="/React-Blogging-Website/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;