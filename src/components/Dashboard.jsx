import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const dummyData = {
    "1234567890123": { nume: "Popescu Ion", analiza: "HPV - Negativ" },
    "9876543210987": { nume: "Ionescu Maria", analiza: "Babes-Papanicolau - Fără modificări" }
};

const Dashboard = () => {
    const { cnp } = useParams();
    const navigate = useNavigate();
    const pacient = dummyData[cnp];

    return (
        <div className="dashboard-container">
            {pacient ? (
                <div>
                    <h2>Bun venit, {pacient.nume}!</h2>
                    <p><strong>Rezultatul Analizei:</strong> {pacient.analiza}</p>
                    <button className="dashboard-button" onClick={() => navigate("/")}>
                        Inapoi la Acasa 
                    </button>
                </div>
            ) : (
                <p className="no-data"> Nu există date pentru acest CNP.</p>
            )}
        </div>
    );
};

export default Dashboard;
