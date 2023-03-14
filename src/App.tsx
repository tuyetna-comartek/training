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
  console.log("data: ", Data);
  const [newArray, setNewArray] = useState<any>(Data);

  // const
  // newArray.map((item: any) => {
  //   setNewArray({ ...newArray, ... });
  // });

  const arrayName = Data.reduce((item, row) => {
    const arrayItem = row.name;
    const lastIndex = arrayItem.lastIndexOf(" ");
    const initialValue = 0;
    const key = row.subjects.reduce((score: any, row: any) => {
      return score + row.score;
    }, initialValue);

    const newArray = [
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
  console.log("score medii: ", arrayName);

  const newArrayScore: any = sortArrayScore(dataScoreMedium, "Desc");
  console.log("score: ", newArrayScore);

  const groupedPeople = groupBy(dataScoreMedium);
  console.log(groupedPeople);

  const totalMediumClass = totalMedium(dataScoreMedium);
  console.log("order: ", totalMediumClass);
  console.log("best: ", newArrayScore[0]);

  const bestStudent = findGoodStudent(dataScoreMedium);
  console.log("best student: ", bestStudent);

  return (
    <div>
      <header>
        <span>1. </span>
        <TableUser arrayName={sortDataName} />
        <hr />
        <span>2. </span>
        <TableScore arrayName={newArrayScore} />
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
