import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import styles from './View.module.css';

export default function RegistrationView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(operations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>New user registration</h1>
            <form
                className={styles.form}
                onSubmit={handleSubmit}>
                <label className={styles.label}><span className={styles.labelSpan}>Name</span>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label className={styles.label}><span className={styles.labelSpan}>Email</span>
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label className={styles.label}><span className={styles.labelSpan}>Password</span>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button
                    className={styles.formButton}
                    type="submit">Register</button>
            </form>
        </div>

    );
};