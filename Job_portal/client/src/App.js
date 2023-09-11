import logo from "./logo.svg";
import "./App.css";
import 'antd/dist/reset.css';
import { Button } from "antd";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions.";
import { useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostedJobs from "./pages/PostedJobs";
import EditJob from "./pages/EditJob";
import { getAllUsers } from "./redux/actions/userActions";
import UserInfo from "./pages/UserInfo";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers())
  }, []);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <FadeLoader color={"#001529"} />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/appliedjobs" element={<AppliedJobs />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs/:id" element={<JobInfo />} />
          <Route path="/posted" element={<PostedJobs />} />
          <Route path="/editjob/:id" element={<EditJob />} />
          <Route path="/users/:id" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return <Route {...props} />;
  }
}
