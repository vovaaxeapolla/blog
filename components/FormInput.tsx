import styles from '../styles/FormInput.module.sass';

interface FormInputProps {
    placeholder: string
    type: 'text' | 'password' | 'email'
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    name: string
    value: string
    error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, onChange, name, value, error = '' }) => {
    return (
        <div className={styles.FormInput}>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
            <div className={styles['FormInput__placeholder']}>
                {placeholder}
            </div>
            {error &&
                <div className={styles['FormInput__error']}>
                    {error}
                </div>
            }
        </div>
    )
}

export default FormInput;