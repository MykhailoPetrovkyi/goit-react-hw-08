import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import { selectNameFilter } from '../../redux/filters/selectors'
import { changeFilter } from '../../redux/filters/slice'
import css from './SearchBox.module.css'

export default function SearchBox() {
  const filter = useSelector(selectNameFilter)
  const dispatch = useDispatch()

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <div className={css.div}>
      <TextField
        variant="filled"
        label="Search"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        fullWidth
      />
    </div>
  )
}
