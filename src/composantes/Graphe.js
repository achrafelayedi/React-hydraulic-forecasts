import { defaults } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

/* const row = (d) => {
  d.population = +d.population;
  return d;
}; */

const Graphe = () => {
  //let debit = [];
  //let cote = [];
  //let heure = []

  return (
    <div>
      <Line
        data={{
          labels: [
            "28/06/2021 10h",
            "28/06/2021 11h",
            "28/06/2021 12h",
            "28/06/2021 13h",
            "28/06/2021 14h",
            "28/06/2021 15h",
          ],
          datasets: [
            {
              label: "Débit",
              data: [20, 33, 10, 45, 3, 54],
              backgroundColor: "#FF1493",
              borderColor: "#FF1493",
              yAxisID: "y1",
            },
            {
              label: "Cote",
              data: [30, 50, 10, 22, 35, 14],
              backgroundColor: "blue",
              borderColor: "blue",
              yAxisID: "y2",
            },
          ],
        }}
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

export default Graphe;
