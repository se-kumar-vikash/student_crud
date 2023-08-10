import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './layouts/Header';
import ViewStudent from "./pages/ViewStudent";
import StudentRegistration from "./pages/StudentRegistration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ViewStudent />} />
          <Route exact path="/add_student" element={<StudentRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
