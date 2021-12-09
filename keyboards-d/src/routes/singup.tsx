import { FormEvent, useState } from "react";
import NavBar from "../components/NavBar";
// Language: typescript
// Path: keyboards-d\src\routes\singup.tsx

const SignUp = () => {
    const [username, setName] = useState('');    
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');    

    async function registerUser(e: FormEvent<HTMLFormElement>){
        console.log(JSON.stringify({
            username,
            email,
            password
        }))
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
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
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    type="username"
                    placeholder="username"
                    />    
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                    />
                    
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    />
                    <input type="submit" value="Register" />`
                </form>
            </div>
        </main>
    )
}

export default SignUp;
