import { AddTransactionForm } from '../../features/wallet/add-transaction-form'

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
            <AddTransactionForm />
        </div>
    )
}
