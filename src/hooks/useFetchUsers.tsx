import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks';
import { userRef } from '../utils/FirebaseConfig';

function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const uid = useAppSelector(state=> state.auth.userInfo?.uid);

  useEffect(() =>{
    if(uid){
        const getUsers = async () => {
            const firestoreQuery = query(userRef,where('uid','!=', uid));
            const data = await getDocs(firestoreQuery);
             const firebaseUsers = [];
             data.forEach((user) => {
                const userData = user.data()
                firebaseUsers.push({
                    ...userData,
                    label: userData.name,
                })
             })
             setUsers(firebaseUsers);
        };
        getUsers();
    }
  },[uid]);
  return [users];
}

export default useFetchUsers