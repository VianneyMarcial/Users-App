import axios from 'axios';


const UsersList = ({usersList, selectUser, deleteUser}) => {

  

  return (

    <ul>
      {usersList.map((user) => (
        <li key={user.id} className="list" >
          <h3 className='inf'>{user.first_name} {user.last_name} </h3>
          <div className='inf'>
            {user.email}
          </div>
          <div className='inf'>
            <img src="./cake.svg" alt="" className='iconCake'/>{user.birthday}
          </div>
          <button onClick={() => selectUser(user)}> <img src="./trash.svg" alt="" className='icons'/>  </button>
          <button onClick={() => deleteUser(user)}> <img src="./pencil.svg" alt="" className='icons'/> </button>
        </li>
      ))}
    </ul>

  );
};

export default UsersList;