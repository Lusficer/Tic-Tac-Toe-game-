export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turnData) => (
        <li key={`${turnData.square.row}${turnData.square.col}`}>
          {turnData.player} selected {turnData.square.row},{turnData.square.col}
        </li>
      ))}
    </ol>
  );
}
