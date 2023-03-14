import { Data } from "./component/Data";
import "./App.css";
import {
  findGoodStudent,
  groupBy,
  onMediumScore,
  sortArrayName,
  sortArrayScore,
  totalMedium,
} from "./component/Array";
import { useState } from "react";
import { TableUser } from "./component/TableUser";
import { TableScore } from "./component/TableScore";

function App() {
  const arrayName = Data.reduce((item, row) => {
    const arrayItem: any = row.name;
    const lastIndex = arrayItem.lastIndexOf(" ");
    const initialValue = 0;
    const key = row.subjects.reduce((score: any, row: any) => {
      return score + row.score;
    }, initialValue);

    const newArray: any = [
      ...item,
      {
        lastName: arrayItem.slice(0, lastIndex),
        firstName: arrayItem.slice(lastIndex + 1, arrayItem.length),
        medium: key / row.subjects.length,
      },
    ];

    return newArray;
  }, [] as any[]);

  const sortDataName: any = sortArrayName(arrayName, "Asc");

  const dataScoreMedium = onMediumScore(Data);

  const newArrayScore: any = sortArrayScore(dataScoreMedium, "Desc");

  const totalMediumClass = totalMedium(dataScoreMedium);

  const bestStudent = findGoodStudent(dataScoreMedium);
  const groupStudent = groupBy(dataScoreMedium);
  console.log("grpup: ", groupStudent);

  return (
    <div>
      <header>
        <span>1. </span>
        <TableUser arrayName={sortDataName} />
        <hr />
        <span>2. </span>
        <TableScore arrayName={newArrayScore} />
        <hr />
        <span>3. </span>
        <span style={{ fontSize: "18px", fontWeight: "700" }}>
          Hoc sinh gioi:
        </span>
        <TableScore arrayName={groupStudent[0].excelent} />
        <br />
        <span style={{ fontSize: "18px", fontWeight: "700" }}>
          Hoc sinh kha:
        </span>
        <TableScore arrayName={groupStudent[0].good} />
        <br />
        <span style={{ fontSize: "18px", fontWeight: "700" }}>
          Hoc sinh trung binh:
        </span>
        <TableScore arrayName={groupStudent[0].medium} />
        <br />
        <span style={{ fontSize: "18px", fontWeight: "700" }}>
          Hoc sinh yeu:
        </span>
        <TableScore arrayName={groupStudent[0].weak} />
        <hr />

        <div style={{ display: "flex", gap: "20px" }}>
          <span>4.</span>
          <span>hoc sinh gioi: </span>
          <span>{bestStudent?.name}</span>
          <span>{bestStudent?.medium}</span>
        </div>
        <hr />
        <span>5. </span>
        <table>
          <tr>
            <th>last name</th>
            <th>first name</th>
            <th>Medium</th>
          </tr>
          {arrayName.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <td>{item?.lastName}</td>
                <td>{item.firstName}</td>
                <td>{item.medium}</td>
              </tr>
            );
          })}
        </table>
        <p>Trung binh ca lop: {totalMediumClass}</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Hoc sinh gioi nhat cua lop: </span>
          <span>name: {newArrayScore[0].name}</span>
          <span>score: {newArrayScore[0].medium}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
