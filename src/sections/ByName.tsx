import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid, Input, TextField } from "@mui/material";
import Cocktail from "../components/cocktail";
import CocktailDb from "../services/cocktaildb";

export default function ByFirstName() {
  const [selectedChar, setSelectedChar] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const cocktailDbRef = React.useRef<CocktailDb>(CocktailDb.getInstance());
  const timeoutRef = React.useRef<any>(null);
  useEffect(() => {
    if (selectedChar !== "") {
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      timeoutRef.current = setTimeout(()=>{
          setLoading(true);
          cocktailDbRef.current
            .byName(selectedChar)
            .then((data) => setCocktails(data))
            .finally(() => setLoading(false));
      }, 300);
    } else {
      setCocktails([]);
    }
  }, [selectedChar]);
  return (
    <Container>
      <TextField variant="outlined" label="cocktail name." onChange={(e) => setSelectedChar(e.target.value)} />
      <div style={{ margin: 10 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {" "}
            {(cocktails || []).map((cocktail: any, idx) => (
              <Grid key={cocktail.strDrink} item xs={3}>
                <Cocktail key={cocktail.strDrink} data={cocktail} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Container>
  );
}
