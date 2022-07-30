import "./App.css";
import PatientsTable from "./components/PatientsTable";

function App() {
  return (
    <div className="container-fluid">
      <PatientsTable></PatientsTable>
      <div className="text-center">
        <a
          href="https://admin-dashboard-task.netlify.app/"
          target="_blank"
          className="btn btn-primary text-center my-3"
        >
          Go To Admin Dashboard
        </a>
      </div>
    </div>
  );
}

export default App;
