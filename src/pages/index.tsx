import { LoginForm } from '../features/login/Form'

export default function Login() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
            <LoginForm />
        </div>
    )
}
