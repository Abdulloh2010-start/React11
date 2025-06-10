import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Users from "./components/Users";
import "../App.css";

export default function App() {
  return (
    <div className="flex bg-[#f1f1f1] min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <Users />
      </div>
    </div>
  )
};