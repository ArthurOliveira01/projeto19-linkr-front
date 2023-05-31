import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderTestPage } from "./Components/HeaderTestPage";
import SigninPage from "./Components/SigninPage";
import SignupPage from "./Components/SignupPage";
import { TestPage } from "./Components/Tests/Testpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/teste" element={<TestPage/>}/>
        <Route path="/header" element={<HeaderTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
