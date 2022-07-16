import React, { useState } from "react";
import {
  Button,
  Card,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback } from "react";

const LocationOverview = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
  });

  return (
    <>
      <Card>
        {/* 검색 창 */}
        <TextField
          onInput={onChangeSearch}
          // label="Search"
          variant="outlined"
          placeholder="Search..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ fill: "#e2e2e2" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" sx={{ ml: 1 }}>
          검색
        </Button>
      </Card>
    </>
  );
};

export default LocationOverview;
