import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { login } from '../../redux/auth/operations'
import css from './LoginForm.module.css'
import { Button, TextField } from '@mui/material'

export default function LoginForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success('Success!!!')
      })
      .catch(() => {
        toast.error('Something went wrong! Try again with new data')
      })

    actions.resetForm()
  }

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form className={css.form} autoComplete="off">
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
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  )
}
