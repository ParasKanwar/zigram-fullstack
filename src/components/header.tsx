import { useNavigate } from "react-router-dom";

interface Props {
  height: number;
  items: {
    name: string;
    path: string;
  }[];
}

function Header(props: Props) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: "white",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
    >
      {props.items.map((val, i) => {
        return (
          <div
            key={val.name}
            onClick={() => navigate(val.path)}
            style={{ height: "100%", textAlign: "center", borderRadius: "10%", padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 10px' }}
          >
            {val.name}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
