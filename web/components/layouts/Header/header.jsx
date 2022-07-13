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

const Header = ({ sx }) => {
  return (
    <AppBar sx={sx}>
      <Toolbar>
        나와
        <Box flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
