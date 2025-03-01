import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Interface from "./pages/dashboard/interface/Interface";
import Components from "./pages/dashboard/component/Components";
import Pages from "./pages/dashboard/pages/Pages";
import Form from "./pages/dashboard/form/Form";
import Gallery from "./pages/dashboard/gallery/Gallery";
import Document from "./pages/dashboard/documents/Document";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/Signup";

import Main from "./pages/dashboard/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Main />} />
          <Route path="interface" element={<Interface />} />
          <Route path="components" element={<Components />} />
          <Route path="pages" element={<Pages />} />
          <Route path="form" element={<Form />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="documentation" element={<Document />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
