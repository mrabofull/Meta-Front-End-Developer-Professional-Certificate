import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div>
      <Header name="John" color="blue" />
      <Main bookTitle="The Great Gatsby" />
      <Sidebar author="F. Scott Fitzgerald" />
    </div>
  );
}

export default App;
