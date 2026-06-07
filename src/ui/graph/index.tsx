import React from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "./styles.css";
import { GraphApp } from "./App";

const container = document.getElementById("app");

if (container) {
  createRoot(container).render(<GraphApp />);
}
