import React from 'react';
import { useSelector } from 'react-redux';

function Users() {
  const {users, isLoading, error} = useSelector((state) => state.users);

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
