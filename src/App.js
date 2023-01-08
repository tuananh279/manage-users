import { useState } from 'react';
import './App.css';
import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, { username: uName, age: uAge, id: Math.random().toString() }];
        });
    };

    return (
        <Wrapper>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </Wrapper>
    );
}

export default App;
