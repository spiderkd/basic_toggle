import Login from "./components/Login";
import Profile from "./components/profile";
import UserContextProvide from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvide>
      <Login />
      <Profile />
    </UserContextProvide>
  );
}

export default App;
