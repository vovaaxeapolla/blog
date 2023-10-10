import { useForm, Controller } from "react-hook-form";
import FormInput from "../FormInput";
import styles from "./Form.module.sass";


type SignUpInputs = {
    email: string
    login: string
    password: string
}

export default function SignUp() {

    const { control, handleSubmit } = useForm<SignUpInputs>()
    const onSubmit = (data: SignUpInputs) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field: { onChange, value, } }) => (
                    <FormInput
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={value}
                        onChange={onChange} />
                )}
            />
            <Controller
                control={control}
                name="login"
                defaultValue=""
                render={({ field: { onChange, value, } }) => (
                    <FormInput
                        placeholder="Login"
                        type="text"
                        name="login"
                        value={value}
                        onChange={onChange} />
                )}
            />
            <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field: { onChange, value, } }) => (
                    <FormInput
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={value}
                        onChange={onChange} />
                )}
            />
            <button type="submit" className={styles['form__submit']}>
                Sign Up
            </button>
        </form>
    );
}