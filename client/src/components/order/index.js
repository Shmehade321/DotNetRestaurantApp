import React from 'react'
import OrderForm from './OrderForm'
import { useForm } from "../../hooks/useForm";

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

    return (
        <OrderForm {...{values, errors, handleInputChanges}} />
    )
}

export default Order
