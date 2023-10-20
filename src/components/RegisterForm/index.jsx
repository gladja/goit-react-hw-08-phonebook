import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
// import { toast } from 'react-toastify';

export const RegisterForm = ({registerUser}) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = object({
    name: string().required(),
    email: string().nullable().email().required(),
    password: string().min(8).max(16).required(),
  });

  const handleSubmit = (v, a) => {
    const dataUser = {
      name: v.name,
      email: v.email,
      password: v.password,
    };
    registerUser(dataUser);
    a.resetForm();
  };

  // const notify = (msg) => toast.error(`Wow so easy! ${msg}`);

  return (
    <>
      <h2>Register</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label>
            Name:
            <Field type={'text'} name={'name'} placeholder={'Name'} />
            <ErrorMessage
              name='name'
              // render={msg => notify(msg)}
              component={'div'}
            />
          </label>
          <br />
          <label>
            Email:
            <Field type={'text'} name={'email'} placeholder={'email'}/>
            <ErrorMessage name='email' component={'div'}/>
          </label>
          <br />

          <label>
            Password:
            <Field type={'password'} name={'password'} placeholder={'******'}/>
            <ErrorMessage name='password' />
          </label>
          <br />
          <button type={'submit'}>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
