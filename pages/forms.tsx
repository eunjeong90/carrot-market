import { FieldErrors, useForm } from "react-hook-form"

interface LoginForm {
  username: string;
  email: string;
  password: string;
}
export default function Forms() {
  // handleSubmit은 두개의 함수를 받게 되는데 첫번째 함수는 form이 유효할 때만 실행되며, 두번째 함수는 form이 유효하지 않을 때 실행된다
  const { register, handleSubmit, formState: {errors} } = useForm<LoginForm>({
    mode:
  });
  const onValid = (data:LoginForm) => {
    //console.log(data)
  }
  // 인자로 에러를 받기 때문에 인자 수정해야함
  const onInvalid = (errors:FieldErrors) => {
    console.log(errors)
  }
  console.log(errors)
  return (
  <form onSubmit={handleSubmit(onValid, onInvalid)}>
    <input
      {...register('username', {
        required: "username is required",
        minLength: {
          message: "The username should be longer than 5 chars.",
          value: 5,
        }
      })}
      type="text"
      placeholder="Username"
    />
    <input
      {...register('email', {
        required: "email is required",
        validate: {
          notGmail: (value) => 
            !value.includes("@gmail.com") || "Gmail is not allowed",
        }
      })}
      type="email"
      placeholder="Email"
    />
    {errors.email?.message}
    <input
      {...register('password', {
        required: "password is required"
      })}
      type="password"
      placeholder="Password"
    />
    <input type="submit" value="Create Account" />
  </form>
  )
}