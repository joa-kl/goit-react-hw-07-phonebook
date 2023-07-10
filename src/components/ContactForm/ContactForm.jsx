import css from "./ContactForm.module.css"
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleFormSubmit = event => {
        event.preventDefault();

        const contact = {
            id: nanoid(),
            name: event.currentTarget.elements.name.value,
            number: event.currentTarget.elements.number.value,
        };
        
        const doesExist = contacts.find(
            ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
        );

        if (doesExist) {
            return Notify.failure("Contact already exists");
        }

        dispatch(
            addContact(contact),
            Notify.success("Contact was added to phonebook"),
            event.currentTarget.reset()
        );
    }
        
        // useEffect(() => {
        //     if (contacts) {
        //     localStorage.setItem("contacts", JSON.stringify(contacts));
        //     }
        // }, [contacts]);


        return (
            <form onSubmit={handleFormSubmit} className={css.form}>
                <label className={css.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter name"
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
                    className={css.input}
                    required
                />

                <button type="submit" className={css.button}>Add contact</button>
            </form>
        )
    }


export default ContactForm;