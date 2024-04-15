import { useEffect, useState } from "react";

const Form = () => {
    const [useName, SetUsername] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState({});

    useEffect(() =>{

        if (Object.keys(error).length === 0){
            SetEmail("");
            SetUsername("");
            SetPassword("");
        }
    }, {error}
    );
    function formHandler(e) {
        e.preventDefault();
        let errorObj = {};

        if (useName.trim()=== "") {
            errorObj.useName = "Name required";
        }

        if (email.trim() === "") {
            errorObj.email = "Email required"
        } else if (!/\$+@\$+\.\$+/.test(email)) {
            errorObj.email = "Email required"
        }
        if (password.trim() === "") {
            errorObj.password = "Password is required"
        } else if (password.length < 6) {
            errorObj.password = "Password must be at length"
        }

        SetError(errorObj);
    }
    return (
        <>
        <div>
             <form onSubmit={formHandler}>
                  <input type="text" placeholder="Name" ></input>
                  {error.useName && <div className="error"></div>}

                  
                  <input type="email" placeholder="Email" ></input>
                  {error.email && <div className="error"></div>}
                  <input type="password" placeholder="Password" ></input>
                  {error.password && <div className="error"></div>}
                  <button type="submit">SUBMIT</button>
                         
             </form>

           <div>
              <div>{useName}</div>
              <div>{email}</div>
              <div>{password}</div>
           </div>



      </div>
      </>
    )
       
}

export default Form;