import "./App.css";
import { theme } from "antd";
import { CSSProperties, FC, useEffect } from "react";
import React from "react";
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { PersonalityTestPage } from "./PersonalityTest";
import { NavLink } from "react-router-dom";
import { CompatibilityTestPage } from "./CompatibilityTest";

const { useToken } = theme;

const Root: FC = () => {
  const style = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/compatibilityTest");
  }, []);
  return (
    <>
      <div style={style.navbar}>
        <NavLink to="personalityTest" style={({ isActive }) => ({ ...style.nav, ...(isActive ? style.active : {}) })}>
          Тест на личность
        </NavLink>
        <NavLink to="compatibilityTest" style={({ isActive }) => ({ ...style.nav, ...(isActive ? style.active : {}) })}>
          Тест на совместимость
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "personalityTest",
        element: <PersonalityTestPage />,
      },
      {
        path: "compatibilityTest",
        element: <CompatibilityTestPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const useStyle = () => {
  const { token } = useToken();

  const style: Record<string, CSSProperties> = {
    navbar: {
      display: "flex",
      gap: token.paddingLG,
      paddingTop: token.paddingMD,
      paddingLeft: token.paddingMD,
      paddingRight: token.paddingMD,
      height: 50,
      width: "100%",
      backgroundColor: token.colorBgLayout,
    },
    nav: {
      fontSize: token.fontSizeHeading3,
      padding: `0px ${token.paddingSM}`,
      textDecoration: "none",
      color: token.colorPrimary,
    },
    active: {
      color: token.colorTextBase,
      borderBottom: `2px solid ${token.colorTextBase}`,
    },
  };

  return style;
};
