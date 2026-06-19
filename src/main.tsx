import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Home />
      <Footer />
    </div>
  </React.StrictMode>
);
