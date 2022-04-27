import { Modal } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Cocktail({ data }: { data: any }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        style={{ display: "flex", alignItems: "center", justifyContent: "center", outline: "none" }}
        open={modal}
        onClose={() => setModal(false)}
      >
        <Card style={{ padding: 10, width: 500, maxHeight: 400, overflow: "auto" }}>
          <Stack spacing={2}>
            <img style={{ maxWidth: 300 }} src={data.strDrinkThumb} alt={data.strDrink} />
            <Typography variant="h5">{data.strDrink}</Typography>
            {Object.keys(data).map((key) => {
              if (data[key]) {
                return (
                  <Box key={key}>
                    <Typography variant="h6">{key}</Typography>
                    <Typography variant="subtitle2">{data[key]}</Typography>
                  </Box>
                );
              }
              return null;
            })}
          </Stack>
        </Card>
      </Modal>
      <Card
        onClick={() => setModal(true)}
        elevation={10}
        style={{
          backgroundImage: `url(${data.strDrinkThumb})`,
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            minHeight: 200,
            backgroundImage: `linear-gradient(
              to bottom,
              hsla(0, 0%, 0%, 0) 0%,
              hsla(0, 0%, 0%, 0.009) 11.7%,
              hsla(0, 0%, 0%, 0.034) 22.1%,
              hsla(0, 0%, 0%, 0.072) 31.2%,
              hsla(0, 0%, 0%, 0.123) 39.4%,
              hsla(0, 0%, 0%, 0.182) 46.6%,
              hsla(0, 0%, 0%, 0.249) 53.1%,
            hsla(0, 0%, 0%, 0.320) 58.9%,
            hsla(0, 0%, 0%, 0.394) 64.3%,
            hsla(0, 0%, 0%, 0.468) 69.3%,
            hsla(0, 0%, 0%, 0.540) 74.1%,
            hsla(0, 0%, 0%, 0.607) 78.8%,
            hsla(0, 0%, 0%, 0.668) 83.6%,
            hsla(0, 0%, 0%, 0.721) 88.7%,
            hsla(0, 0%, 0%, 0.762) 94.1%,
            hsla(0, 0%, 0%, 0.790) 100%
            )`,
          }}
        >
          <Stack style={{ marginLeft: "auto" }} spacing={0.5}>
            <Typography style={{ color: "white" }} fontWeight={700}>
              {data.strDrink}
            </Typography>
          </Stack>
        </Box>
      </Card>
    </>
  );
}
