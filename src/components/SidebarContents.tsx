import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarMenu } from "../hooks/SidebarMenu";

export default () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <Box>
      {/* TODO: 로고 */}
      <Box sx={{ px: 2.5, py: 3, display: "inline-block" }}>로고</Box>

      {/* TODO: 유저 정보 */}
      <Box sx={{ mb: 5, mx: 2.5 }}>유저 정보</Box>

      <Box>
        <List disablePadding sx={{ p: 1 }}>
          {SidebarMenu.map((item) => {
            const { title, href } = item;

            return (
              <ListItemButton
                key={title}
                onClick={() => navigate(href)}
                disableGutters
                selected={pathname === href}
                sx={{
                  mb: 1,
                  ...(pathname === href && {
                    color: "white",
                    backgroundColor: (theme) =>
                      `${theme.palette.primary.main}!important`,
                    // backgroundColor: `gray !important`,
                  }),
                  borderRadius: 3,
                }}
              >
                <ListItemText
                  sx={{ paddingLeft: 2 }}
                  disableTypography
                  primary={title}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};
