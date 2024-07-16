import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import ChatPage from "../pages/ChatPage";
import ProfilePage from "../pages/ProfilePage";
import AuthPage from "../pages/AuthPage";
import SelfAssessment from "../pages/SelfAssessmentPage";
import SignupComponent from "../components/authComponent/SignupComponent";
import SigninComponent from "../components/authComponent/SigninComponent";
import VerificationComponent from "../components/authComponent/VerificationComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />
      <Route path="/home" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/self-assessment" element={<SelfAssessment />} />
      <Route path="/get-started" element={<AuthPage />}>
        <Route path="signup" element={<SignupComponent />} />
        <Route path="signin" element={<SigninComponent />} />
        <Route path="verify" element={<VerificationComponent />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
