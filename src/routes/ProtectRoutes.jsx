import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export const ProtectRoutes = ({ role = "user" }) => {
  const { isUserAuth } = useSelector((state) => state.user);
  const { isAdminAuth } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (role === "admin" && !isAdminAuth) {
      navigate("/admin/login", { state: { from: location } });
    } else if (role === "user" && !isUserAuth) {
      navigate("/login", { state: { from: location } });
    }
  }, [isUserAuth, isAdminAuth, navigate, location, role]);

  return <Outlet />;
};
