import User from "./User.jsx";
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from "react";
import { fetchUsers} from "../actions/index.js";

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers(users));
    }, [dispatch, users]);

    return (
        <div className="user-list">
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {users.length > 0 ? (
                    users.map((user) => (
                        <User key={user.id} user={user} />
                    ))
                ) : (
                    <p>No users available</p>
                )}
            </div>
        </div>
    );
};

export default UserList;
