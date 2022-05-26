import { Route, Routes, useParams } from "react-router-dom";
import RequiredAuth from "./Auth/RequiredAuth";
import Blog from "./Blog";
import BlogByUser from "./Blogs/BlogByUser";
import BlogEdit from "./Blogs/BlogEdit";
import Blogs from "./Blogs/Blogs";
import DashboardOutlet from "./Blogs/DashboardOutlet";
import WriteBlog from "./Blogs/WriteBlog";
import Home from "./Home";
import Login from "./Login";
import Me from "./Me";
import Signup from "./Signup";
import User from "./User/User";
import UserMe from "./User/UserMe";
import UserMeInfo from "./User/UserMeInfo";
import UserMeInfoEdit from "./User/UserMeInfoEdit";



function App() {

  const {_id} = useParams();

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />

        <Route path={'/user'} element={<User />} />
        <Route path={'/user/login'} element={<Login />} />
        <Route path={'/user/signup'} element={<Signup />} />

        <Route path={'/blog'} element={<Blogs />} />
        <Route path={'/blog/:_id'} element={<Blog />} />

        <Route path={'/blog/by-user'} element={<BlogByUser />} />

        <Route path={'/dashboard/'} element={<RequiredAuth><DashboardOutlet /></RequiredAuth>}>
          <Route path={'my-blogs'} element={<Me />} />
          <Route path={'blog/edit'} element={<BlogEdit />} />
          <Route path={'user/me/'} element={<UserMe />} >
            <Route path={'userinfo'} element={<UserMeInfo />} />
            <Route path={'userinfo/edit'} element={<UserMeInfoEdit />} />
          </Route>
          <Route path={'write'} element={<WriteBlog />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;