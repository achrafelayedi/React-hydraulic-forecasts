import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Sec78 = () => {
  const [chartData, setChartData] = useState({});
  /* const [Heure, setHeure] = useState([]);
  const [Debitt, setDebit] = useState([]);
  const [Cotee, setCote] = useState([]); */

  const chart = () => {
    let debit_observe = [];
    let debit_prevu = [];
    let cote_prevue = [];
    let cote_observe = [];
    let heure = [];

    axios
      .get("http://localhost:3000/res?id_section=1")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          debit_observe.push(parseInt(dataObj.Debit_observe));
          cote_observe.push(parseInt(dataObj.Cote_observe));
          debit_prevu.push(parseInt(dataObj.Debit_prevu));
          cote_prevue.push(parseInt(dataObj.Cote_prevue));
          heure.push(dataObj.Heure);
        }
        setChartData({
          labels: heure,
          datasets: [
            {
              label: "Débit prévu",
              data: debit_prevu,
              backgroundColor: "blue",
              borderColor: "blue",
              yAxisID: "y1",
              borderDash: [1, 4],
            },
            {
              label: "Cote observée",
              data: cote_observe,
              backgroundColor: "#FF1493",
              borderColor: "#FF1493",
              yAxisID: "y2",
            },
            {
              label: "Cote prévue",
              data: cote_prevue,
              backgroundColor: "#FF1493",
              borderColor: "#FF1493",
              yAxisID: "y2",
              borderDash: [1, 4],
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log(heure, debit, cote);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="chartP84600">
      {/* <div className="form-group top-margin-small">
        <label className="card-selector-label">
          Séléctionner une simulation OSCAR --{" "}
        </label>
        <select className="card-selector form-control">
          <option>12/05/2021 11:46</option>
          <option>12/05/2021 9:46</option>
        </select>
      </div> */}
      <Line
        data={chartData}
        height={300}
        width={400}
        options={{
          scales: {
            y1: {
              type: "linear",
              min: 0,
              max: 3500,
              position: "left",
              title: {
                text: "Débit (m3/s)",
                display: true,
              },
            },
            y2: {
              type: "linear",
              min: 0,
              max: 250,
              position: "right",
              title: {
                text: "Cote (m)",
                display: true,
              },
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            },
          },
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              position: "top",
              text: "Section 78.000 (P78.000)",
              font: {
                size: 25,
              },
            },
            legend: {
              position: "top",
            },
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }}
      />
    </div>
  );
};

export default Sec78;
