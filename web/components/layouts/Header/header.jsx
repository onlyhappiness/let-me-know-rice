// import React from "react";

// import { AppBar, Box, Toolbar } from "@mui/material";

// const Header = () => {
//   return (
//     <AppBar>
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           // width: '100%',
//         }}
//       >
//         <div>bar</div>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <div>프로필</div>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ sx, toggleMobileSidebar }) => {
  return (
    <AppBar sx={sx}>
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1} />
        {/* <div>검색바?</div> */}
        <div>회원가입 및 로그인</div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
