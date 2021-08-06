import React from 'react'

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateForm = () => {
        if (email.length > 0 && password.length > 0 && confirmPassword == password) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <form>
            <label>Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <label>Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <label>Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
                        
            <button type="submit" disabled={!validateForm()}>Log In</button>
        </form>   
    )
}

export default Register
