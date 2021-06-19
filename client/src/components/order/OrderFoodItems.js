import React from "react";
import {
  List,
  ListItemText,
  Paper,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

const OrderFoodItems = (props) => {
  const { orderedFoodItems } = props;

  return (
    <List>
      {orderedFoodItems.map((item, idx) => (
        <Paper id={idx}>
          <ListItem>
            <ListItemText
              primary={item.foodItemName}
              primaryTypographyProps={{
                component: "h1",
                style: { fontWeight: "500", fontSize: "1.2em" },
              }}
            />
            <ListItemSecondaryAction>
              <IconButton>
                <DeleteTwoToneIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default OrderFoodItems;
