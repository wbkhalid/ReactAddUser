
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = () => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;
        }
        if (enteredUserAge < 1) {
            return;
        }

        console.log(enteredUserName, enteredUserAge);
        setEnteredUserName('');
        setEnteredUserAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);

    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">UserName</label>
                <input type="text" id="username" value={enteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" value={enteredUserAge} onChange={userAgeChangeHandler} />
                <Button type="submit">Add User</Button>

            </form>
        </Card>
    );
}

export default AddUser;