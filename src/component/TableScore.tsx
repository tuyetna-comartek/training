interface Props {
  arrayName: Array<any>;
}
export const TableScore = ({ arrayName }: Props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Medium</th>
      </tr>
      {arrayName.map((item: any, index: number) => {
        return (
          <tr key={index}>
            <td>{item?.name}</td>
            <td>{item?.medium}</td>
          </tr>
        );
      })}
    </table>
  );
};
