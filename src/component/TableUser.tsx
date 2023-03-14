interface Props {
  arrayName: Array<any>;
}
export const TableUser = ({ arrayName }: Props) => {
  return (
    <table>
      <tr>
        <th>last name</th>
        <th>first name</th>
      </tr>
      {arrayName.map((item: any, index: number) => {
        return (
          <tr key={index}>
            <td>{item?.lastName}</td>
            <td>{item.firstName}</td>
          </tr>
        );
      })}
    </table>
  );
};
