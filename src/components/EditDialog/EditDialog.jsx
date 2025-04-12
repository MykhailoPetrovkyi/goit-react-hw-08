import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField } from '@mui/material'

const EditDialog = ({
  open,
  handleClose,
  handleUpdate,
  editName,
  setEditName,
  editNumber,
  setEditNumber,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-dialog-title"
      aria-describedby="edit-dialog-description"
    >
      <DialogTitle id="edit-dialog-title">{'Edit Contact'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Update the contact details:</DialogContentText>
        <TextField
          variant="filled"
          label="Name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="filled"
          label="Phone Number"
          value={editNumber}
          onChange={(e) => setEditNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUpdate} color="primary" autoFocus>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditDialog
