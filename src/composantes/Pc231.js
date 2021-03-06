import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Pc231 = () => {
  const [chartData, setChartData] = useState({});
  /* const [Heure, setHeure] = useState([]);
  const [Debitt, setDebit] = useState([]);
  const [Cotee, setCote] = useState([]); */

  const chart = () => {
    let volume = [];
    let cote = [];
    let heure = [];

    axios
      .get("http://localhost:3000/res?id_casier=36")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          volume.push(parseInt(dataObj.Volume));
          cote.push(parseInt(dataObj.Cote));
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
            },
            {
              label: "Cote",
              data: cote,
              backgroundColor: "#FF1493",
              borderColor: "#FF1493",
              yAxisID: "y2",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(heure, volume, cote);
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
              max: 10,
              title: {
                text: "Volume (m3)",
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

export default Pc231;
