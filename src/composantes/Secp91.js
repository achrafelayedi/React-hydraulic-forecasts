import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Secp91 = () => {
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
      .get("http://localhost:3000/res?id_section=3")
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
              label: "Débit observé",
              data: debit_observe,
              backgroundColor: "blue",
              borderColor: "blue",
              yAxisID: "y1",
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
              text: "Section 91.250 (P91.250)",
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

export default Secp91;
