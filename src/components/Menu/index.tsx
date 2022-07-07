import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Article from "@mui/icons-material/Article";

import categoryData from "./categoryData.json";

export default function Menu() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%", marginTop: "3rem" }}>
      <MenuList>
        {categoryData.map((category) => (
          <MenuItem
            sx={{
              borderBottom: "1px solid",
              "&:hover": { backgroundColor: "#89b7e1" },
            }}
          >
            <ListItemIcon>
              <Article fontSize="large" />
            </ListItemIcon>
            <ListItemText sx={{ paddingLeft: "1rem" }}>
              {category[1]}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
