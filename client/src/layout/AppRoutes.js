import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetCurrentUserMutation } from "../lib/APIS/userApis/userApi";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AboutPage from "../pages/AboutPage";
// import AdminPage from "../pages/AdminPage";
import ServicesPage from "../pages/ServicesPage";
import ProfApplyPage from "../pages/ProfApplyPage";
import ChatPage from "../pages/ChatPage";
import ProfilePage from "../pages/ProfilePage";
import AuthPage from "../pages/AuthPage";
import SelfAssessment from "../pages/SelfAssessmentPage";
import SignupComponent from "../components/authComponent/SignupComponent";
import SigninComponent from "../components/authComponent/SigninComponent";
import VerificationComponent from "../components/authComponent/VerificationComponent";
import UpdatePassword from "../components/authComponent/UpdatePassword";
import Error404 from "../components/errorComponents/Error404";
import { ProtectedRoutes } from "./ProtectedRoute";
import { GeneralRoutes } from "./GeneralRoutes";

const AppRoutes = () => {
  const [getCurrentUser] = useGetCurrentUserMutation();
  const { user } = useSelector((state) => state.userState);

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    getCurrentUser();
  }, [pathname]);

  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />
      <Route path="/home" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />

      {!user && (
        <Route
          path="/get-started"
          element={<GeneralRoutes user={user} children={<AuthPage />} />}
        >
          <Route
            path="signup"
            element={
              <GeneralRoutes user={user} children={<SignupComponent />} />
            }
          />
          <Route
            path="signin"
            element={
              <GeneralRoutes user={user} children={<SigninComponent />} />
            }
          />
          <Route
            path="verify"
            element={
              <GeneralRoutes user={user} children={<VerificationComponent />} />
            }
          />
          <Route
            path="set-password"
            element={
              <GeneralRoutes user={user} children={<UpdatePassword />} />
            }
          />
        </Route>
      )}

      <Route
        path="/session/:sessionId"
        element={<ProtectedRoutes user={user} children={<ChatPage />} />}
      />
      <Route
        path="/profile"
        element={<ProtectedRoutes user={user} children={<ProfilePage />} />}
      />
      <Route
        path="/self-assessment"
        element={<ProtectedRoutes user={user} children={<SelfAssessment />} />}
      />

      <Route
        path="/professional-application"
        element={<ProtectedRoutes user={user} children={<ProfApplyPage />} />}
      />
    </Routes>
  );
};

export default AppRoutes;
