// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TeacherRoutes from "./Routes/TeacherRoutes";
import StudentRoutes from "./Routes/StudentRoutes";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Landing from "./Pages/Landing/Landing";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import ErrorPage from "./Pages/Error";
import AuthRoutes from "./Routes/AuthRoutes";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import UserRoutes from "./Routes/UserRoutes";
import SetRole from "./Pages/SetRole";
import SetPhoto from "./Pages/SetPhoto";
import TeacherDashboard from "./Pages/teacher/Dashboard";
import TeacherPerformaceList from "./Pages/teacher/PerformanceList";
import TopicPerformace from "./Pages/teacher/TopicPerformace";
import SingleStudentPerformace from "./Pages/teacher/SingleStudentPerformace";
import StudentDashboard from "./Pages/student/Dashboard";
import PracticeSpace from "./Pages/student/PracticeSpace";
import SubtopicList from "./Pages/student/SubtopicList";
import PlacementQuiz from "./Pages/PlacementQuiz";
import ProtectedStudentRoutes from "./Routes/ProtectedStudentRoutes";
import LearningTypeQuiz from "./Pages/LearningTypeQuiz";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthRoutes />}>
          <Route index path="/" element={<Landing />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:passwordResetToken"
            element={<ResetPassword />}
          />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          {/* User Routes */}
          <Route element={<UserRoutes />}>
            <Route path="/set-role" element={<SetRole />} />
            <Route path="/set-photo" element={<SetPhoto />} />
          </Route>

          {/* Student Routes */}
          <Route element={<ProtectedStudentRoutes />}>
            <Route path="placement-quiz" element={<PlacementQuiz />} />
            <Route path="learning-type-quiz" element={<LearningTypeQuiz />} />
            <Route path="/student" element={<StudentRoutes />}>
              <Route index element={<StudentDashboard />} />
              <Route path="subtopic-list" element={<SubtopicList />} />
              <Route path="practice-space" index element={<PracticeSpace />} />
            </Route>
          </Route>

          {/* Teacher Routes */}
          <Route path="/teacher" element={<TeacherRoutes />}>
            <Route path="" element={<TeacherDashboard />} />
            <Route
              path="performance-list"
              element={<TeacherPerformaceList />}
            />
            <Route
              path="performance-list/:id"
              element={<SingleStudentPerformace />}
            />
            <Route path="topic-performance" element={<TopicPerformace />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />

        {/* <Route
          path="/teacher/*"
          element={
            user && isAuthenticate && user.role === userRoles.teacher ? (
              <TeacherRoutes />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/student/*"
          element={
            user && isAuthenticate && user.role === userRoles.student ? (
              <StudentRoutes />
            ) : (
              <Navigate to="/" />
            )
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
