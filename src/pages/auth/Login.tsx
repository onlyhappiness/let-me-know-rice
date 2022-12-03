import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export default () => {
  return <div>Login</div>;
};
