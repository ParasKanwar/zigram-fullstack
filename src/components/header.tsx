import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

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
          <Button
            key={val.name}
            onClick={() => navigate(val.path)}
            variant="outlined"
            style={{ margin: '0px 10px' }}
          >
            {val.name}
          </Button>
        );
      })}
    </div>
  );
}

export default Header;
