import React,{useState} from 'react'

const RegisterPage = () => {
    const [form,setForm] = useState({
          username:'',
          email:''
    })
    const onChangeHandler = (event:any) => {
        console.log(event.target.value)
        const {name,value} = event.target
        setForm({...form})
    }
    const onSubmitHandler = (event:any) => {
        event.preventDefault()
        console.log(form)
    }
    
  return (
    <form onSubmit={onSubmitHandler}>
       <input 
            type="text"
            name="username" 
            value={form.username}
                onChange={onChangeHandler}
       />
       <input 
            type="email"
            name="email" 
            value={form.email}
                onChange={onChangeHandler}
       />
       <button type='submit'>send</button>
    </form>
  )
}

export default RegisterPage
