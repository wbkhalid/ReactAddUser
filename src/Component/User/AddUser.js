
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age (age >0)'
            })
            return;
        }

        props.onAddUser(enteredUserName, enteredUserAge)
        setEnteredUserName('');
        setEnteredUserAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);

    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" value={enteredUserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" value={enteredUserAge} onChange={userAgeChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;