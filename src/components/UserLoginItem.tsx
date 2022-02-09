import {User} from '../types'
type Props = {
  logIn: (value: User) => void
  user: User | null
}
function UserLoginItem ({ user, logIn }: Props) {
  if (user === null) return (<h1>Loading</h1>)
  return (
    <li>
      <button
        className='user-selection'
        onClick={() => {
          logIn(user)
        }}
      >
        <img
          className='avatar'
          width='50'
          height='50'
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
      </button>
    </li>
  )
}

export default UserLoginItem
