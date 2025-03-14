import CarbonForm from "./components/CarbonForm";
import ResultDisplay from "./components/ResultDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1>CarbonTrackr</h1>
      <CarbonForm />
      <ResultDisplay />
    </div>
  );
}
export default App;
