import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "./components/table/Column";
import { Table } from "./components/table/Table";
import { SeriesService } from "./services/series.service";
import styles from "./index.module.scss";
import { Score } from "./@types/score";

export const App = () => {

  // instance of websocket connection
  const ws = new WebSocket('ws://localhost:3001');
  const [series, setSeries] = React.useState<Series[]>([]);
  const [scores, setScores] = useState<Score[]>([])

  useEffect(() => {
    // Get series data
    SeriesService.getSeries()
    .then((series: Series[]) => {
      setSeries(series);
    })
    .catch(error => console.log(error));

    // Listen for messages with live game scores
    ws.addEventListener('message', (event) => {
      const scores = JSON.parse(event.data) as Score[];
      setScores(scores);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const matchesHeaderTemplate = () => {
    return <div className={styles["header-matches"]}>
        <span>Team 1</span>
        <span>Team 2</span>
    </div>
  }
  
  const matchesBodyTemplate = (rowData: Series, rowIndex: number) => {

      const team1 = rowData['teams'][0];
      const team2 = rowData['teams'][1];
      
      const score1 = scores[rowIndex]?.games[0]?.teams[0]?.score;
      const score2 = scores[rowIndex]?.games[0]?.teams[1]?.score;

      const seriesScore1 = scores[rowIndex]?.series.teams[0]?.score;
      const seriesScore2 = scores[rowIndex]?.series?.teams[1]?.score;
    
    return (
      <div className={styles["teams-wrapper"]}>
        <div className={styles["team-info"]}>
          <span>{team1.name}</span>
          <img 
            src={team1.logoUrl}
            alt="team1 logo"
            width={20}
            height={20}
          />
          <span className={styles["series-score"]}>({seriesScore1})</span>
          <span className={styles["score"]}>{score1}</span>
        </div>
        <div className={styles["cross"]}>X</div>
        <div className={styles["team-info"]}>
          <span className={styles["score"]}>{score2}</span>
          <span className={styles["series-score"]}>({seriesScore2})</span>
          <img 
              src={team2.logoUrl}
              alt="team2 logo"
              width={20}
              height={20}
            />
          <span>{team2.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["table-wrapper"]}>
      <h1>On Going Games</h1>
      <Table data={series}>
        <Column 
          header="Title"
          field="title"
          styles="grey-text"
          filter="DROPDOWN"
        />
        <Column 
          header="Time"
          field="startTime"
          type="date"
        />
        <Column 
          header={matchesHeaderTemplate()}
          body={matchesBodyTemplate}
          type="date"
        />
        <Column 
          header="Tournament"
          field="tournament.name"
          styles="grey-text"
          filter="TEXT"
        />
      </Table>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
