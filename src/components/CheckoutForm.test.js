import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameField = screen.getByLabelText(/first name:/i);
    // console.log(firstNameField);

        // userEvent.type(firstNameField, 'blahblah');
    const lastNameField =  screen.getByLabelText(/last name:/i)
    const  addressField =  screen.getByLabelText(/address:/i)
    const cityField  =  screen.getByLabelText(/city:/i)
    const  stateField =  screen.getByLabelText(/state:/i)
    const  zipField =  screen.getByLabelText(/zip:/i)
    const submitBtn = screen.getByRole("button");

    // expect(firstNameField).toBeTruthy();
    // expect(lastNameField).toBeTruthy();
    // expect(addressField).toBeTruthy();
    // expect(cityField).toBeTruthy();
    // expect(stateField).toBeTruthy();
    // expect(zipField).toBeTruthy();
    // expect(submitBtn).toBeTruthy();

    userEvent.type(firstNameField, 'Adam')
    userEvent.type(lastNameField, 'Hinton')
    userEvent.type(addressField, '3223 Wallace St 1R')
    userEvent.type(cityField, 'Philadelphia')
    userEvent.type(stateField, 'Pennsylvania')
    userEvent.type(zipField, '19104')

    userEvent.click(submitBtn);

    const successMsg = screen.getByText(/You have ordered some plants! Woo-hoo!/i);

    expect(successMsg).toBeTruthy();
});
