import React from "react";
import OrderForm from "./OrderForm";
import { useForm } from "../../hooks/useForm";
import { Grid } from "@material-ui/core";
import SearchFoodItems from "./SearchFoodItems";
import OrderFoodItems from "./OrderFoodItems";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const initialOrderForm = () => ({
  id: 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  paymentMethod: "none",
  total: 0,
  deletedOrderItemIds: "",
  orderDetails: [],
});

const Order = () => {
  const {
    values,
    setValues,
    errors,
    setErros,
    handleInputChanges,
    resetFormControls,
  } = useForm(initialOrderForm);

  const addFoodItem = (foodItem) => {
    let x = {
      id: 0,
      orderId: values.id,
      foodItemId: foodItem.id,
      quantity: 1,
      foodItemPrice: foodItem.foodItemPrice,
      foodItemName: foodItem.name,
    };

    setValues({
      ...values,
      orderDetails: [...values.orderDetails, x],
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <OrderForm {...{ values, errors, handleInputChanges }} />
      </Grid>
      <Grid item xs={6}>
        <SearchFoodItems {...{ addFoodItem }} />
      </Grid>
      <Grid item xs={6}>
        <OrderFoodItems {...{ orderedFoodItems: values.orderDetails }} />
      </Grid>
    </Grid>
  );
};

export default Order;
