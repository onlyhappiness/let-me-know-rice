import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Menuitems from "./MenuItems";

const SidebarContent = ({ onSidebarClose }) => {
  const router = useRouter();
  const location = router.pathname;

  return (
    <Box p={2} height="100%">
      <Box mt={2}>
        {Menuitems?.map((item, index) => (
          <List component="li" disablePadding key={item.title}>
            <ListItem
              button
              selected={location === item.href}
              sx={{
                mb: 1,
                ...(location === item.href && {
                  color: "white",
                  backgroundColor: (theme) =>
                    `${theme.palette.primary.main}!important`,
                }),
              }}
            >
              <ListItemText onClick={onSidebarClose}>{item.title}</ListItemText>
            </ListItem>
          </List>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarContent;
