import React from 'react';
import {useState} from 'react';

function LoginForm(){
    const [id,setId]=useState<string>('')
    const [password,setPassword]=useState<string>('')

    const onChange = (event:any):void => {
        const { target: { name,value}} = event
        if(name==='id') {setId(value)}
        else {setPassword(value)}
        console.log(value)
    }
    const onSubmit=(event:any):void=>{
        event.preventDefault()
        console.log(id,password)
        console.log(11111111111111111111111111111111111)
    }
    return (
        <div>
            <form action="">
                ID:<input type="text" name="id" onChange={onChange}/>
                PW:<input type="text" name="password" onChange={onChange}/>
                <input type="submit" value='로그인' onSubmit={onSubmit}/>
            </form>
        </div>
    )
}

export default LoginForm

