import { useEffect, useState } from 'react';
import { User, fetchUsers } from '../utils';

const useUsers = () => {
  const [state, setState] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setState(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return state;
};

export default useUsers;
