import React, { useEffect, useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  InputBase,
  IconButton,
  makeStyles,
  ListItemSecondaryAction,
} from "@material-ui/core";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import PlusOneTwoToneIcon from "@material-ui/icons/PlusOneTwoTone";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";

const useStyles = makeStyles((theme) => ({
  searchPaper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    marginLeft: theme.spacing(1.5),
    flex: 1,
  },
  listRoot: {
    marginTop: theme.spacing(1),
    maxHeight: 450,
    overflow: "auto",
    "& li:hover": {
      cursor: "pointer",
      backgroundColor: "#e3e3e3",
    },
    "& li:hover .MuiButtonBase-root": {
      display: "block",
      color: "#000",
    },
    "& .MuiButtonBase-root": {
      display: "none",
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const SearchFoodItems = (props) => {
  const classes = useStyles();

  const {addFoodItem} = props

  const [foodItems, setFoodItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.FOODITEM)
      .fetchAll()
      .then((res) => {
        setFoodItems(res.data);
        setSearchList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let searchResults = [...foodItems];
    searchResults = searchResults.filter((x) => {
      return x.name.toLowerCase().includes(searchKey.toLocaleLowerCase());
    });
    setSearchList(searchResults);
  }, [searchKey]);

  return (
    <>
      <Paper className={classes.searchPaper}>
        <InputBase
          className={classes.searchInput}
          placeholder="Search food items"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <IconButton>
          <SearchTwoToneIcon />
        </IconButton>
      </Paper>
      <List className={classes.listRoot}>
        {searchList.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item.name} secondary={"$" + item.price} />
            <ListItemSecondaryAction>
              <IconButton onClick={e => addFoodItem(item)}>
                <PlusOneTwoToneIcon />
                <ArrowForwardIosTwoToneIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SearchFoodItems;
