import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouter from "./router/AppRouter.jsx";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

let queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
);
