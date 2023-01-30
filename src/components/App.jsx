// import { useState, useEffect } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import  ContactForm  from "./ContactForm/ContactForm";
import { ContactList } from "./Contacts/ContactList";
import { Filter } from "./Filter/Filter";
import { getIsLoading, getError } from 'redux/selectors';
// import { nanoid } from 'nanoid';


export  function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        backgroundColor: 'azure',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error}
      <ContactList />
    </div>
  );
}