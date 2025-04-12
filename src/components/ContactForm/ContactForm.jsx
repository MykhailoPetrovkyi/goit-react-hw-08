import css from './ContactForm.module.css'
import { Formik, Form } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contacts/operations'
import { Button, TextField } from '@mui/material'
import toast from 'react-hot-toast'

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

const initialValues = {
  name: '',
  number: '',
}
export default function ContactForm() {
  const nameFieldId = useId()
  const numberFieldId = useId()

  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Successfully  added')
      })
      .catch(() => {
        toast.error('Something went wrong! Try again later')
      })

    actions.resetForm()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      {({ errors, touched, getFieldProps }) => (
        <Form className={css.form}>
          <div className={css.field}>
            <TextField
              variant="filled"
              label="Name"
              id={nameFieldId}
              {...getFieldProps('name')}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
            />
          </div>

          <div className={css.field}>
            <TextField
              variant="filled"
              label="Number"
              id={numberFieldId}
              {...getFieldProps('number')}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
              fullWidth
            />
          </div>

          <Button variant="contained" color="primary" type="submit" className={css.btn}>
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  )
}
