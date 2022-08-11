import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import CharactersContainer from "./CharactersContainer";

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
      <div className="App">
        <CharactersContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
