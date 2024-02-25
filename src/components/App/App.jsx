import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../Sidebar";
import HomePage from '../../pages/HomePage';
import SalesPage from '../../pages/SalesPage';
import CostsPage from '../../pages/CostsPage';
import PaymentPage from '../../pages/PaymentPage';
import FinancesPage from '../../pages/FinancesPage';
import MessagesPage from '../../pages/MessagesPage';
import SettingsPage from '../../pages/SettingsPage';
import SupportPage from '../../pages/SupportPage';

library.add(fas);

const App = () => {
  return (
    <Router>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/costs" element={<CostsPage />} />
          <Route path="/payments" element={<PaymentPage />} />
          <Route path="/finances" element={<FinancesPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
