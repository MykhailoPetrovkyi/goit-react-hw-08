import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/operations'
import css from './RegistrationForm.module.css'
import { Button, TextField } from '@mui/material'
import toast from 'react-hot-toast'

export default function RegistrationForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Successfully registred')
      })
      .catch(() => {
        toast.error('Try with other data')
      })
    actions.resetForm()
  }

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            <Field
              component={TextField}
              type="text"
              name="name"
              variant="filled"
              label="Username"
              onChange={(e) => setFieldValue('name', e.target.value)}
            />
          </label>
          <label className={css.label}>
            <Field
              component={TextField}
              type="email"
              name="email"
              variant="filled"
              label="Email"
              onChange={(e) => setFieldValue('email', e.target.value)}
            />
          </label>
          <label className={css.label}>
            <Field
              component={TextField}
              type="password"
              name="password"
              variant="filled"
              label="Password"
              onChange={(e) => setFieldValue('password', e.target.value)}
            />
          </label>
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Form>
      )}
    </Formik>
  )
}
