import { defaults } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Testgraphe = () => {
  const [chartData, setChartData] = useState({});
  /* const [Heure, setHeure] = useState([]);
  const [Debitt, setDebit] = useState([]);
  const [Cotee, setCote] = useState([]); */

  const chart = () => {
    let debit = [];
    let cote = [];
    let heure = [];

    axios
      .get("http://localhost:3000/res")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          debit.push(parseInt(dataObj.Debit));
          cote.push(parseInt(dataObj.Cote));
          heure.push(dataObj.Heure);
        }
        setChartData({
          labels: heure,
          datasets: [
            {
              label: "Débit",
              data: debit,
              backgroundColor: "#FF1493",
              borderColor: "#FF1493",
              yAxisID: "y1",
            },
            {
              label: "Cote",
              data: cote,
              backgroundColor: "blue",
              borderColor: "blue",
              yAxisID: "y2",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(heure, debit, cote);
  };

  useEffect(() => {
    chart();
  }, []);

  //console.log(prevision);

  return (
    <div>
      <Line
        data={chartData}
        height={400}
        width={600}
        options={{
          scales: {
            y1: {
              type: "linear",
              position: "left",
              title: {
                text: "Débit (m3/s)",
                display: true,
              },
            },
            y2: {
              type: "linear",
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
              text: "Prévisions hydrauliques OSCAR",
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

export default Testgraphe;
