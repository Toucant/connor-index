import { FormEvent, useState } from "react";
import NavBar from "../components/NavBar";
// Language: typescript
// Path: keyboards-d\src\routes\singup.tsx

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');    
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');

    async function registerUser(e: FormEvent<HTMLFormElement>){
        // FOR DEV
        console.log(JSON.stringify({
            email,
            firstName,
            lastName
        }))
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/api/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                })
            })
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log('fetch error: ' + error);
        }
    }
    
    return (
        <main>
        <NavBar />
            <div>
                <h1>Register</h1>
                <form onSubmit={registerUser}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                    />
                    <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="firstName"
                    placeholder="First Name"
                    />    
                    
                    <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="lastName"
                    placeholder="Last Name"
                    />
                    
                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    )
}

export default CreateUser;
