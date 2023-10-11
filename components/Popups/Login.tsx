import { useForm, Controller } from "react-hook-form";
import FormInput from "../FormInput";
import styles from "./Form.module.sass";
import axios from "axios";
import UserStore from "../../stores/UserStore";

type LoginInputs = {
    email: string
    password: string
}

export default function Login() {

    const { control, handleSubmit } = useForm<LoginInputs>()
    const onSubmit = async (data: LoginInputs) => {
        const result = await axios.post('/api/auth/login', data, { withCredentials: true });
        const user = result.data;
        UserStore.user = user;
    }

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