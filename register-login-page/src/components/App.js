import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import SignUp from "./SignUp";

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;