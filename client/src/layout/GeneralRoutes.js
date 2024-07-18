import { useNavigate } from "react-router-dom";

export const GeneralRoutes = ({ user, children }) => {
  const navigate = useNavigate();

  if (user) {
    return navigate(-1);
  }

  return children;
};
