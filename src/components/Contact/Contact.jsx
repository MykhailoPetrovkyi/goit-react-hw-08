import { useState } from 'react'
import { FaUser, FaPhoneAlt, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteContact, updateContact } from '../../redux/contacts/operations'
import css from './Contact.module.css'
import toast from 'react-hot-toast'
import DeleteDialog from '../DeleteDialog/DeleteDialog'
import EditDialog from '../EditDialog/EditDialog'

export default function Contact({ data: { id, name, number } }) {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [editName, setEditName] = useState(name)
  const [editNumber, setEditNumber] = useState(number)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Successfully deleted!')
      })
    handleClose()
  }

  const handleClickOpenEdit = () => {
    setOpenEdit(true)
  }

  const handleCloseEdit = () => {
    setOpenEdit(false)
  }

  const handleUpdate = () => {
    dispatch(
      updateContact({
        id,
        name: editName,
        number: editNumber,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Successfully updated!')
      })
    handleCloseEdit()
  }

  return (
    <div className={css.div}>
      <p className={css.p}>
        <FaUser /> {name}
      </p>
      <p className={css.p}>
        <FaPhoneAlt /> {number}
      </p>
      <button className={css.btn} onClick={handleClickOpen}>
        <MdDelete style={{ width: '25px', height: '25px' }} />
      </button>
      <button
        className={css.editBtn}
        style={{ width: '25px', height: '25px' }}
        onClick={handleClickOpenEdit}
      >
        <FaEdit />
      </button>
      <DeleteDialog open={open} handleClose={handleClose} handleDelete={handleDelete} />
      <EditDialog
        open={openEdit}
        handleClose={handleCloseEdit}
        handleUpdate={handleUpdate}
        editName={editName}
        setEditName={setEditName}
        editNumber={editNumber}
        setEditNumber={setEditNumber}
      />
    </div>
  )
}
