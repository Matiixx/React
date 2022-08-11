import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";

function App() {
  const qc = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={qc}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
