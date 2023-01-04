import { EuiProvider, EuiThemeProvider } from "@elastic/eui";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateMeeting from "./pages/CreateMeeting";
import OneOnOneMeeting from "./pages/OneOnOneMeeting";

function App() {

  return (
    <EuiProvider>
      <EuiThemeProvider >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateMeeting />} />
          <Route path="/create1on1" element={<OneOnOneMeeting />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </EuiThemeProvider>
    </EuiProvider>
  );
}

export default App;
