import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from '../redux/users/usersSlice';

function Users() {
  const {users, isLoading, error} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  if (isLoading){
    return <div>Loading...</div>
  } else if (error) {
    return <div>{error}</div>
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    );
  }

}

export default Users;
