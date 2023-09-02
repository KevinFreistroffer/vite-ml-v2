import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import LinearRegression from "./pages/LinearRegression";
import LogisticRegression from "./pages/LogisticRegression";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="linear-regression" element={<LinearRegression />} />
      <Route path="logistic-regression" element={<LogisticRegression />} />
    </Route>
  )
);

export default router;
