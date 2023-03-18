import "./App.css";
import Panel from "./components/Panel";
import Search from "./components/Search";
import SearchAddress from "./components/SearchAddress";
import SearchComponent from "./components/SearchComponent";
import { searchSpaces as searchAdresses } from "./service/searchAddress";
import { searchSpaces } from "./service/search";

// type Results = {
//   addresses: Address[];
// };

// type Address = {
//   address: string;
//   country: string;
// };

function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      {/* <SearchAddress /> */}
      <SearchComponent
        searchFunction={searchSpaces}
        parseResults={(res) => res.spaces}
        displayRow={(row, key) => <div key={key}>{row.name}</div>}
      />

      <SearchComponent
        searchFunction={searchAdresses}
        parseResults={(res) => res.addresses}
        displayRow={(row, key) => (
          <div key={key}>
            {row.address} {row.country}
          </div>
        )}
      />
      <Panel />
    </div>
  );
}

export default App;
