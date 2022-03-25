import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const Fatchdata = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
     console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className='container text-center'>
         <h3>github users with api</h3>
        <div className='row'>
     
    
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <div className='col col-md-1 m-5' key={id}>
              <img style={{width:'100px'}} src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </div>
          );
        })}
     
      </div>
    </div>
  );
};

export default Fatchdata;
