import React from 'react'

const CharSelect = ({ char, onSelect, selected }: { char: string; onSelect: any; selected: boolean }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="charSelect"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 10,
        textAlign: 'center',
        margin: 10,
        cursor: "pointer",
        background: selected ? "black" : hovered ? "rgba(0,0,0,0.2)" : "white",
        color: !selected ? "black" : "white",
        borderRadius: "50%",
        height: 20,
        width: 20,
        border: `1px solid ${selected ? "white" : "black"}`,
        transition: "0.25s all",
      }}
      onClick={() => onSelect(char)}
    >
      {char.toUpperCase()}
    </div>
  );
};

const CharSelector = ({ onCharChange, value }: { onCharChange: any, value: string }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        padding: 10,
        display: "flex",
        // width: 200,
        flexWrap: "wrap",
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map((c) => (
        <CharSelect char={c} onSelect={(char: string) => onCharChange(char)} selected={value === c} />
      ))}
    </div>
  );
};

export default CharSelector;