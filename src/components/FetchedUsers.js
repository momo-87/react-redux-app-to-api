import { useSelector } from 'react-redux';

const FetchedUsers = () => {
  const { userItems, isLoading, error } = useSelector((state) => state.users);
  return (
    <div>
      <h1>Users</h1>
      {isLoading ? <p>Loading...</p> : undefined}
      {error ? <p>{error}</p> : undefined}
      {userItems.map((user) => (
        <ul key={user.id}>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
        </ul>
      ))}
    </div>
  );
};
export default FetchedUsers;
