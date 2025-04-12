import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logout } from '../../redux/auth/operations'
import css from './UserMenu.module.css'
import { Button } from '@mui/material'

export default function UserMenu() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button variant="contained" type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}
