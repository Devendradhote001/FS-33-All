import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter.jsx";
import { store } from "./store/Store.jsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import ErrorHandler from "./components/ErrorHandler.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ErrorHandler />
      <ToastContainer />
    </QueryClientProvider>
  </Provider>
);
