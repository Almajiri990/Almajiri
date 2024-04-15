import React, { useState } from "react";

const Admin =() => {
    const [createUser, setCreateUser] = useState({
        username: "",
        email: "",
        imgUrl: ""
    })

   const {email,username, imgUrl} = createUser
    const handleChange = (e)=> {
        const {value, name, files} = e.target
        setCreateUser((prev)=> ({
            ...prev,
            [name]: value
    }))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {imgUrl && <img src={imgUrl} alt='image'/>}
                <input type="email" placeholder='Email'value={email}
                onChange={handleChange}/>
                <input type="text" placeholder='Username'value={username}
                onChange={handleChange}/>
                <input type="file" />
                <button type="submit">Create user</button>
            </form>
        </div>
    )
}

export default Admin