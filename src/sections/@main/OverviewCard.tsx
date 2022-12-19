import { Card, Typography } from "@mui/material";
import React from "react";

export default ({ title }: any) => {
  return (
    <Card
      sx={{
        py: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
};
