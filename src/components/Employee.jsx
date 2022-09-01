import getData from "../data/employee.json";
import { Children } from "react";
import "../App.css";
export default function Employee() {
  return (
    <div className="content-wrapper">
      <h1>Henloo</h1>
      {Children.toArray(
        getData.GRID.COLUMNS.COLUMN.map((responnse) => {
          return (
            <div>
              <p>{responnse._attributes.Name}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
