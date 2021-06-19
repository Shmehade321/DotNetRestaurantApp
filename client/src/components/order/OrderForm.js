import {
  Grid,
  InputAdornment,
  makeStyles,
  ButtonGroup,
  Button as MuiButton,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Form from "../../layouts/Form";
import { Input, Select, Button } from "../../controls";
import ReplayIcon from "@material-ui/icons/Replay";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ReorderIcon from "@material-ui/icons/Reorder";
import { createAPIEndpoint, ENDPOINTS } from "../../api";

const useStyles = makeStyles((theme) => ({
  adornmentText: {
    "& .MuiTypography-root": {
      color: "#f3b33d",
      fontWeight: "bolder",
      fontSize: "1.5em",
    },
  },
  submitButtonGroup: {
    backgroundColor: "#f3b33d",
    color: "#000",
    margin: theme.spacing(1),
    "& .MuiButton-label": {
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: "#f3b33d",
    },
  },
}));

const paymentMethod = [
  { id: "none", title: "Select" },
  { id: "Cash", title: "Cash" },
  { id: "Card", title: "Card" },
];

const OrderForm = (props) => {
  const classes = useStyles();
  const { values, errors, handleInputChanges } = props;
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.CUSTOMER)
      .fetchAll()
      .then((res) => {
        let response = res.data.map((item) => ({
          id: item.id,
          title: item.name,
        }));
        response = [{ id: 0, title: "Select" }].concat(response);
        setCustomers(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            label="Order Number"
            name="orderNumber"
            value={values.orderNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  className={classes.adornmentText}
                  position="start"
                >
                  #
                </InputAdornment>
              ),
            }}
            disabled
          />
          <Select
            label="Customer"
            name="customerId"
            value={values.customerId}
            onChange={handleInputChanges}
            options={customers}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Payment Method"
            name="paymentMethod"
            value={values.paymentMethod}
            onChange={handleInputChanges}
            options={paymentMethod}
          />
          <Input
            label="Grand Total"
            name="total"
            value={values.total}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  className={classes.adornmentText}
                  position="start"
                >
                  $
                </InputAdornment>
              ),
            }}
            disabled
          />
          <ButtonGroup className={classes.submitButtonGroup}>
            <MuiButton
              size="large"
              type="submit"
              endIcon={<RestaurantMenuIcon />}
            >
              Submit
            </MuiButton>
            <MuiButton size="small" startIcon={<ReplayIcon />} />
          </ButtonGroup>
          <Button size="large" startIcon={<ReorderIcon />}>
            Orders
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default OrderForm;
