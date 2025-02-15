# React Hook Form

## 1) Register input

![step 1](image.png)

Using the spread syntax ({...register('firstName')}) with react-hook-form is necessary because register('firstName') returns an object containing multiple props (onChange, onBlur, name, and ref) that need to be passed to the input element.

Without the spread syntax, you would need to manually assign each property:

```jsx
const { ref, onChange, onBlur, name } = register('firstName');

<input ref={ref} onChange={onChange} onBlur={onBlur} name={name} />
```

Using {...register('firstName')} simplifies this process, automatically applying all required properties to the input.

## 2) input validation

```jsx
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
```

