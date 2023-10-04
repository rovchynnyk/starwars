type PropsT = Readonly<{
  data: Record<string, string>;
}>;

export const KeyValueList = ({ data }: PropsT) => {
  return (
    <ul className="list-none">
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          {key} {value}
        </li>
      ))}
    </ul>
  );
};
