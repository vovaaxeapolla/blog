import { useForm, Controller } from "react-hook-form";
import FormInput from "../FormInput";
import styles from "./Form.module.sass";

type LoginInputs = {
    email: string
    password: string
}

export default function Login() {

    const { control, handleSubmit } = useForm<LoginInputs>()
    const onSubmit = (data: LoginInputs) => console.log(data)

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
                Login
            </button>
        </form>
    );
}