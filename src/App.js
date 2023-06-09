import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HeaderTestPage } from "./Components/HeaderTestPage";
import SigninPage from "./Components/SigninPage";
import SignupPage from "./Components/SignupPage";
import { TestPage } from "./Components/Tests/Testpage";
import { UserPage } from "./Components/UserPage";
import { TimelinePage } from "./Components/Timeline";
import HashTagPage from "./Components/HashTagPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/sign-up" element={<SignupPage/>}/>
        <Route path="/teste" element={<TestPage/>}/>
        <Route path="/header" element={<HeaderTestPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/hashtag/:hashtag" element={<HashTagPage/>}/>
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
