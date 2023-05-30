import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./Components/SigninPage";
import SignupPage from "./Components/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
