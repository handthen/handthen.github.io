import React, { useState,forwardRef,useImperativeHandle } from 'react';

const Model = ({ok,model},ref) => {
    const [form, serForm] = useState({
        username: "",
        password: "",
    })
    useImperativeHandle(ref,()=>({
      show
    }))
    function show(){
        console.log(form)
        return new Promise((res,rej)=>{
            res(form)
        })
    }
    function setInput(e) {
        const name = e.target.name
        serForm(state => {
            return {
                ...state,
                [name]: e.target.value
            }
        })
    }
    function btnok(){
        ok({...form})
        serForm({
            username: "",
            password: "",
        })
    }
    return (
        <>
            {model ? (<form >
                <p>
                    <label>
                        账号:
                        <input type="text" value={form.username} name="username" onChange={setInput} />
                    </label>
                </p>
                <p>
                    <label>
                        密码:
                        <input type="password" value={form.password} name="password" onChange={setInput} />
                    </label>
                </p>
                <button type="button" onClick={btnok}>确定</button>
            </form>) : null}
        </>
    );
}

export default forwardRef(Model);
