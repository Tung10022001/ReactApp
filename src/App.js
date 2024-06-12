// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import ShortCourses from "./Pages/ShortCourses";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Components/Dashboard";
import SoftwareDevelopment from "./Components/SoftwareDevelopment";
import ECommerce from "./Components/ECommerce";
import GraphicDesign from "./Components/GraphicDesign";
import NetworkManagement from "./Components/NetworkManagement";
import CyberSecurity from "./Components/CyberSecurity";
import Aws from "./Components/Aws";
import Ceh from "./Components/Ceh";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={process.env.REACT_APP_ROUTER_BASE_NAME}>
        <div className="App">
          <Header />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route
                path="/software-development"
                element={<SoftwareDevelopment />}
              />
              <Route path="/e-commerce" element={<ECommerce />} />
              <Route
                path="/network-management"
                element={<NetworkManagement />}
              />
              <Route path="/graphic-design" element={<GraphicDesign />} />
              <Route path="/cyber-security" element={<CyberSecurity />} />
              <Route path="/short-courses" element={<ShortCourses />} />
              <Route path="/aws" element={<Aws />} />
              <Route path="/ceh" element={<Ceh />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
