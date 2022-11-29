import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Settings from "./components/Settings";
import Friends from "./components/Friends";
function App(props) {
  console.log(props);
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-3">
          <div
            className="nav flex-column nav-pills"
            aria-orientation="vertical"
          >
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Мои друзья
            </NavLink>
          </div>
        </div>
        <div className="col-sm-9">
          <Routes>
            <Route
              path="/profile"
              element={<Profile function={props.function.key_getUser} />}
            />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/friends"
              element={<Friends function={props.function.key_getUsers} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
