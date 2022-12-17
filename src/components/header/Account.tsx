import { IconButton } from "@mui/material";
import React, { useState } from "react";

const MENU_OPTIONS = [
  {
    label: "Home",
  },
  {
    label: "Profile",
  },
  {
    label: "Settings",
  },
];

export default () => {
  const [open, setOpen] = useState(null);

  const onHandleOpen = (e: any) => {
    setOpen(e.currentTarget);
  };

  const onHandleClose = () => {
    setOpen(null);
  };

  return (
    // <IconButton
    //   onClick={onHandleOpen}
    //   sx={{
    //     p: 0,
    //   }}
    // >
    <div style={{ color: "black" }}>Account</div>
    // </IconButton>
  );
};
