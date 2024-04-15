import { useState } from "react";

function Form1() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    useEffect(() =>{

        if (Object.keys(error).length === 0){
            setEmail("");
            setUserName("");
            setPassword("");
            setError("");
        }
    }, {error}
    );
    function formHandler(e) {
        e.preventDefault();
        let errorObj = {};

        if (userName.trim()=== "") {
            errorObj.userName = "Name required";
        }

        if (email.trim() === "") {
            errorObj.email = "Email required";
        } else if (!/\$+@\$+\.\$+/.test(email)) {
            errorObj.email = "Email required";
        }
        if (password.trim() === "") {
            errorObj.password = "Password is required";
        } else if (password.length < 6) {
            errorObj.password = "Password must be at length"
        }

        setError(errorObj);

    }


    return (
        <>

            <div>
            <form onSubmit={formHandler}>
                  <input type="text" placeholder="Name" value={''}></input>
                  {error.userName && <div className="error"></div>}

                  
                  <input type="email" placeholder="Email" value={''}></input>
                  {error.email && <div className="error"></div>};
                  <input type="password" placeholder="Password" value={''}></input>
                  {error.password && <div className="error"></div>}
                  <button type="submit">SUBMIT</button>
                         
             </form>

                <div>
              <div>{userName}</div>
              <div>{email}</div>
              <div>{password}</div>
           </div>



            </div>

        </>
    )
}

export default Form1;