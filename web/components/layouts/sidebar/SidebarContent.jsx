import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Menuitems from "./MenuItems";

const SidebarContent = ({ onSidebarClose }) => {
  const router = useRouter();
  const location = router.pathname;

  return (
    <Box p={2} height="100%">
      <Box mt={2}>
        <List>
          {Menuitems?.map((item, index) => (
            <List component="li" disablePadding key={item.title}>
              <NextLink href={item?.href}>
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
                  <ListItemIcon>아이콘</ListItemIcon>
                  <ListItemText onClick={onSidebarClose}>
                    {item.title}
                  </ListItemText>
                </ListItem>
              </NextLink>
            </List>
          ))}
        </List>

        <Box mt={10} pb={5}>
          프로필
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarContent;
