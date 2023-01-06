import {
  EuiGlobalToastList,
  EuiProvider,
  EuiThemeProvider,
} from "@elastic/eui";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateMeeting from "./pages/CreateMeeting";
import OneOnOneMeeting from "./pages/OneOnOneMeeting";
import { useAppSelector } from "./app/hooks";
import { useDispatch } from "react-redux";
import { setToasts } from "./app/slices/MeetingSlice";
import VideoConference from "./pages/VideoConference";
import MyMeetings from "./pages/MyMeetings";
import Meetings from "./pages/Meetings";
import JoinMeeting from "./pages/JoinMeeting";

function App() {
  const toasts = useAppSelector((s) => s.meetings.toasts);
  const dispatch = useDispatch();

  const removeToast = (removeToast: { id: string }) => {
    dispatch(
      setToasts(
        toasts.filter((toast: { id: string }) => toast.id !== removeToast.id)
      )
    );
  };

  return (
    <EuiProvider>
      <EuiThemeProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateMeeting />} />
          <Route path="/create1on1" element={<OneOnOneMeeting />} />
          <Route path="/videoconference" element={<VideoConference />} />
          <Route path="/mymeetings" element={<MyMeetings />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/join/:id" element={<JoinMeeting />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
        <EuiGlobalToastList
          toasts={toasts}
          dismissToast={removeToast}
          toastLifeTimeMs={3000}
        />
      </EuiThemeProvider>
    </EuiProvider>
  );
}

export default App;
