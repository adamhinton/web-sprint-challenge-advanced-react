import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
        //making sure the component renders 
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    //making sure the component renders 
    render(<CheckoutForm/>);


    /declaring my variables, this is all the different fields then the checkout button
    const firstNameField = screen.getByLabelText(/first name:/i);
    const lastNameField =  screen.getByLabelText(/last name:/i)
    const  addressField =  screen.getByLabelText(/address:/i)
    const cityField  =  screen.getByLabelText(/city:/i)
    const  stateField =  screen.getByLabelText(/state:/i)
    const  zipField =  screen.getByLabelText(/zip:/i);
    const submitBtn = screen.getByRole("button");

    //these expects are making sure that the fields exist, I commented them out for the end result.
    // expect(firstNameField).toBeTruthy();
    // expect(lastNameField).toBeTruthy();
    // expect(addressField).toBeTruthy();
    // expect(cityField).toBeTruthy();
    // expect(stateField).toBeTruthy();
    // expect(zipField).toBeTruthy();
    // expect(submitBtn).toBeTruthy();


    //filling in all the fields
    userEvent.type(firstNameField, 'Adam')
    userEvent.type(lastNameField, 'Hinton')
    userEvent.type(addressField, '3223 Wallace St 1R')
    userEvent.type(cityField, 'Philadelphia')
    userEvent.type(stateField, 'Pennsylvania')
    userEvent.type(zipField, '19104')

    //hitting the buttin to checkout
    userEvent.click(submitBtn);

    //declaring a variable for the success message
    const successMsg = screen.getByText(/You have ordered some plants! Woo-hoo!/i);

    //making sure the success message exists
    expect(successMsg).toBeTruthy();
});
