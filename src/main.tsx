import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./routers/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import Providers from "./providers/Providers";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Providers>
                <Router />
            </Providers>
        </QueryClientProvider>
    </React.StrictMode>
);
