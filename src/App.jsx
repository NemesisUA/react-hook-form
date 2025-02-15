import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm(
    { mode: 'onBlur' }
  );

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <h1>React Hook Form</h1>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <label >
          First Name:
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register('firstName', {
              required: 'Поле обовязкове',
              minLength: {
                value: 5, message: 'Мінімальна довжина 5 символів'
              }
            })} />
        </label>

        <div style={{ height: '20px', color: 'red' }}>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
        </div>

        <label >
          Last Name:
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register('lastName', {
              required: 'Поле обовязкове',
              minLength: {
                value: 5, message: 'Мінімальна довжина 5 символів'
              }
            })} />
        </label>

        <div style={{ height: '20px', color: 'red' }}>
          {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}

export default App
