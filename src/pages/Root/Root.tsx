import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export const Root = (): JSX.Element => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
