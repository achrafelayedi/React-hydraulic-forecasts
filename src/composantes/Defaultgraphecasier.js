import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Angry from "./../img/angry.png";

const Defaultgraphecasier = () => {
  const [chartData, setChartData] = useState({});
  /* const [Heure, setHeure] = useState([]);
  const [Debitt, setDebit] = useState([]);
  const [Cotee, setCote] = useState([]); */

  const chart = () => {
    let cote_prevue = [];
    let volume = [];
    let heure = [];

    axios
      .get("http://localhost:3000/res?id_casier=121")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          cote_prevue.push(parseInt(dataObj.Cote_prevue));
          volume.push(dataObj.Volume);
          heure.push(dataObj.Heure);
        }
        setChartData({
          labels: heure,
          datasets: [
            {
              label: "Volume",
              data: volume,
              backgroundColor: "blue",
              borderColor: "blue",
              yAxisID: "y1",
              borderDash: [1, 4],
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
                text: "Volume (m3)",
                display: true,
              },
            },
            y2: {
              type: "linear",
              min: 0,
              max: 250,
              position: "right",
              title: {
                text: "Cote Observée (m)",
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
              text: "Aucune simulation n'a été faite à cette date",
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

export default Defaultgraphecasier;
