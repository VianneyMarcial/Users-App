import axios from 'axios';
import cake from '../../cake.svg'
import trash from '../../trash.svg'
import pencil from '../../pencil.svg'

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
            <img src={cake} alt="" className='iconCake'/>{user.birthday}
          </div>
          <button onClick={() => selectUser(user)}> <img src={trash} alt="" className='icons'/>  </button>
          <button onClick={() => deleteUser(user)}> <img src={pencil} alt="" className='icons'/> </button>
        </li>
      ))}
    </ul>

  );
};

export default UsersList;