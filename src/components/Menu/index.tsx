import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Article from "@mui/icons-material/Article";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { instance } from "../../configs/api";

export default function Menu() {
  const [categories, setCategories] = useState([[]]);
  const [loading, setLoading] = useState(true);
  const fetchAllCategories = () => {
    instance
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <>
      {!loading && categories.length > 0 ? (
        <Paper sx={{ width: 320, maxWidth: "100%", marginTop: "3rem" }}>
          <MenuList>
            {categories.map((category) => (
              <MenuItem
                key={category[0]}
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
      ) : (
        <Skeleton animation="wave" />
      )}
    </>
  );
}
