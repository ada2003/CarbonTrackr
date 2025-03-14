import { useCarbonStore } from "../store/useCarbonStore";
import { useEffect, useState } from "react";

const ResultDisplay = () => {
  const history = useCarbonStore((state) => state.history);
  const [animateItems, setAnimateItems] = useState([]);

  // Set up animation for new entries
  useEffect(() => {
    setAnimateItems(new Array(history.length).fill(false));
    
    if (history.length > 0) {
      const timer = setTimeout(() => {
        setAnimateItems(prev => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [history.length]);

  // Helper function to determine badge color based on carbon footprint
  const getBadgeColor = (footprint) => {
    if (footprint < 5) return "success";
    if (footprint < 15) return "warning";
    return "danger";
  };

  if (history.length === 0) {
    return (
      <div className="container my-5 text-center">
        <div className="card border-0 shadow-sm p-4 bg-light">
          <div className="card-body">
            <h5 className="text-muted">No calculations yet</h5>
            <p className="mb-0">Complete the form to see your carbon footprint results</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h4 className="mb-4 border-bottom pb-2">Your Carbon Footprint History</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {history.map((entry, index) => (
          <div key={index} className="col">
            <div className={`card h-100 shadow-sm border-${getBadgeColor(entry.carbonFootprint)} ${animateItems[index] ? 'animate__animated animate__fadeIn' : 'opacity-75'}`}>
              <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Carbon Footprint</h6>
                <span className={`badge bg-${getBadgeColor(entry.carbonFootprint)} fs-6`}>
                  {entry.carbonFootprint} kg CO₂
                </span>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    {entry.transportMode === "car" && <i className="bi bi-car-front fs-3"></i>}
                    {entry.transportMode === "bus" && <i className="bi bi-bus-front fs-3"></i>}
                    {entry.transportMode === "train" && <i className="bi bi-train-front fs-3"></i>}
                  </div>
                  <div>
                    <p className="card-text mb-0">{entry.travelDistance} km via {entry.transportMode}</p>
                    <small className="text-muted">{new Date().toLocaleDateString()}</small>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Recommendations:</h6>
                <p className="card-text">{entry.recommendations}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultDisplay;