import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/ui/Header';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Register from './components/pages/RegisterPage';
import ReportPage from './components/pages/ReportPage';
import ContactPage from './components/pages/ContactPage';
import FeedbackPage from './components/pages/FeedbackPage';

import { ThemeProvider } from '@mui/material';
import theme from './components/ui/Theme';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/report" element={<ReportPage />}></Route>
          <Route path="/feedback" element={<FeedbackPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;
