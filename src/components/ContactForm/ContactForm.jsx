import { useEffect, useState } from "react";
import css from "./ContactForm.module.css"
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";

const ContactForm = () => {
    const dispatch = useDispatch();
    // const contacts = [];
    const contacts = useSelector(selectContacts);
    const [form, setForm] = useState({
        name: "",
        number: "",
    })


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };
    const { name, number } = form;


    const isUniqueContact = () => {
        const isExistContact = contacts.find(contact => contact.name === name);
        if (isExistContact) {
        Notify.failure("Contact is already exist");
        }
        return !isExistContact;
    };


     const validateForm = () => {
        if (!name || !number) {
        Notify.failure("Some field is empty");
        return false;
        }
        return isUniqueContact(name);
    };


    const handleFormSubmit = event => {
        event.preventDefault();
        const isValidateForm = validateForm();
        if (!isValidateForm) return;
        dispatch(
            addContact({ id: nanoid(), name, number }),
            Notify.success("Contact was added to phonebook"),
            );
        const resetForm = () => setForm({ name: "", number: "" });
        resetForm();
    };
    


    useEffect(() => {
        if (contacts) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }, [contacts]);



    return (
        <form onSubmit={handleFormSubmit} className={css.form}>
            <label className={css.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleChange}
                    className={css.input}
                    required
            />
            <label className={css.label}>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="Enter phone number"
                    value={number}
                    onChange={handleChange}
                    className={css.input}
                    required
                    />

                <button type="submit" className={css.button}>Add contact</button>
        </form>
    )
    }

export default ContactForm;