// CarbonForm.jsx
import { useState } from "react";
import { useCarbonStore } from "../store/useCarbonStore";

const CarbonForm = () => {
  const [travelDistance, setTravelDistance] = useState("");
  const [transportMode, setTransportMode] = useState("car");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const addEntry = useCarbonStore((state) => state.addEntry);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!travelDistance || travelDistance <= 0) {
      setError("Please enter a valid distance");
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/carbon/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          travelDistance: parseFloat(travelDistance), 
          transportMode 
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to calculate carbon footprint");
      }
      
      const data = await response.json();
      // Add transport mode and distance to the entry for display
      const enhancedData = {
        ...data,
        transportMode,
        travelDistance
      };
      
      addEntry(enhancedData);
      
      // Reset form after successful submission
      setTravelDistance("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getTransportIcon = (mode) => {
    switch (mode) {
      case "car": return <i className="bi bi-car-front"></i>;
      case "bus": return <i className="bi bi-bus-front"></i>;
      case "train": return <i className="bi bi-train-front"></i>;
      default: return null;
    }
  };

  return (
    <div className="container my-4">
      <div className="card border-0 shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Calculate Your Carbon Footprint</h4>
        </div>
        <div className="card-body">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="distance" className="form-label fw-bold">Travel Distance</label>
              <div className="input-group mb-3">
                <input 
                  id="distance"
                  type="number" 
                  min="0.1"
                  step="0.1"
                  value={travelDistance} 
                  onChange={(e) => setTravelDistance(e.target.value)} 
                  placeholder="Enter distance" 
                  className="form-control form-control-lg"
                  disabled={isLoading}
                  required
                />
                <span className="input-group-text">km</span>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="transportMode" className="form-label fw-bold">Mode of Transport</label>
              <div className="row g-3">
                {["car", "bus", "train"].map((mode) => (
                  <div className="col-4" key={mode}>
                    <div 
                      className={`card h-100 ${transportMode === mode ? 'border-primary' : 'border-light'}`}
                      onClick={() => setTransportMode(mode)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className={`card-body text-center ${transportMode === mode ? 'bg-primary bg-opacity-10' : ''}`}>
                        <div className="fs-1 mb-2">
                          {getTransportIcon(mode)}
                        </div>
                        <div className="text-capitalize">{mode}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button  
              type="submit" 
              className="btn btn-primary btn-lg w-100"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Calculating...
                </>
              ) : "Calculate Carbon Footprint"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarbonForm;