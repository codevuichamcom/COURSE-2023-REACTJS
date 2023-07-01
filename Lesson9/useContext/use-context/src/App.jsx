import { createContext, useContext, useState } from "react";

const AuthContext = createContext("Authentication");

function App() {
  const [username, setUsername] = useState("FunnyCode");
  return (
    <>
      <button
        onClick={() => {
          setUsername(username === "FunnyCode" ? "Code Vui" : "FunnyCode");
        }}
      >
        Change username
      </button>
      <AuthContext.Provider value={username}>
        <Layout username={username} />
      </AuthContext.Provider>
    </>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <main>Main layout</main>
    </>
  );
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  );
}
function UserInfo() {
  const username = useContext(AuthContext);
  return <h1>username logged in: {username}</h1>;
}

export default App;
