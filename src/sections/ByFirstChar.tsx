import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import CharSelector from "../components/CharSelector";
import Cocktail from "../components/cocktail";
import CocktailDb from "../services/cocktaildb";

export default function ByFirstChar() {
  const [selectedChar, setSelectedChar] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const cocktailDbRef = React.useRef<CocktailDb>(CocktailDb.getInstance());

  useEffect(() => {
    if (selectedChar !== "") {
      setLoading(true);
      cocktailDbRef.current
        .byFirstLetter(selectedChar)
        .then((data) => setCocktails(data))
        .finally(() => setLoading(false));
    }
  }, [selectedChar]);
  return (
    <Container>
      <CharSelector onCharChange={setSelectedChar} value={selectedChar} />
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
