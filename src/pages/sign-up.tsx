import { SignUpForm } from '@/features/sign-up/Form'

export default function SignUp() {
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
            <SignUpForm />
        </div>
    )
}
