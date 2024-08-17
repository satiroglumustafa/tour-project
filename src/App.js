import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css";
import Tours from "./Components/Tours";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [tours, setTour] = useState([]);

  const fetchData = async () => {
    try {
      const request = await fetch(
        "https://www.course-api.com/react-tours-project"
      );
      const response = await request.json();
      setTour(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-build">
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <div className="row">
                  <div className="col-12">
                    <div className="app-title text-center mb-4">
                      <h2>Number of Laps Shown {tours.length}</h2>
                    </div>
                  </div>
                  <Tours toursItems={tours}></Tours>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
