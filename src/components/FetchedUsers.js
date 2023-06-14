import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'store/users/usersSlice';

const FetchedUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const { userItems, isLoading, error } = useSelector((state) => state.users);
  return (
    <div>
      <h1>Users</h1>
      {isLoading ? <p>Loading...</p> : undefined}
      {error ? <p>{error}</p> : undefined}
      {userItems.map((user) => (
        <ul key={user.id.value}>
          <li>{user.name.first}</li>
          <li>{user.name.last}</li>
        </ul>
      ))}
    </div>
  );
};
export default FetchedUsers;
