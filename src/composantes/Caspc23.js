import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Caspc23 = () => {
  const [chartData, setChartData] = useState({});
  /* const [Heure, setHeure] = useState([]);
  const [Debitt, setDebit] = useState([]);
  const [Cotee, setCote] = useState([]); */

  const chart = () => {
    let volume = [];
    let cote_prevue = [];
    let heure = [];

    axios
      .get("http://localhost:3000/res?id_casier=6")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          volume.push(parseInt(dataObj.Volume));
          cote_prevue.push(parseInt(dataObj.Cote_prevue));
          heure.push(dataObj.Heure);
        }
        setChartData({
          labels: heure,
          datasets: [
            {
              label: "Volume prévu",
              data: volume,
              backgroundColor: "blue",
              borderColor: "blue",
              borderDash: [1, 4],
              yAxisID: "y1",
            },
            {
              label: "Cote prévue",
              data: cote_prevue,
              backgroundColor: "#FF1493",
              borderColor: "#FF1493",
              borderDash: [1, 4],
              yAxisID: "y2",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log(heure, volume, cote_prevue);
  };

  useEffect(() => {
    chart();
  }, []);

  //console.log(prevision);

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
              position: "left",
              min: 0,
              max: 1,
              title: {
                text: "Volume (Mm3)",
                display: true,
              },
            },
            y2: {
              type: "linear",
              position: "right",
              min: 0,
              max: 250,
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
              text: "Casier PC2_3",
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

export default Caspc23;
