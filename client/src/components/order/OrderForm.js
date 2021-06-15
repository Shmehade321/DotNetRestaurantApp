import { Grid, InputAdornment, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Form from "../../layouts/Form";
import { Input, Select, Button } from "../../controls";

const useStyles = makeStyles((theme) => ({
  adornmentText: {
    "& .MuiTypography-root": {
      color: "#f3b33d",
      fontWeight: "bolder",
      fontSize: "1.5em",
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
            options={[
              { id: 1, title: "Customer 1" },
              { id: 2, title: "Customer 1" },
              { id: 3, title: "Customer 1" },
              { id: 4, title: "Customer 1" },
            ]}
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
        </Grid>
      </Grid>
    </Form>
  );
};

export default OrderForm;
