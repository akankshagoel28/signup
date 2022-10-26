import { useNavigate} from 'react-router-dom';
import axios from "axios";
import React from "react";
export default function Form(){
const baseURL = "http://localhost:5000/users";

    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [dob,setDob]=React.useState("");
    const [gender,setGender]=React.useState("");
    const [user,setUser]=React.useState({
        name:"",
        email:"",
        password:"",
        dob:"",
        gender:""
    });

      function handleSubmit(e){
        setUser({
            name,
            email,
            password,
            dob,
            gender
        });
        e.preventDefault();
        axios
      .post(baseURL, {
        user
      })
      .then((response) => {
        console.log(response);
      });
      }
    const navigate=useNavigate();
    return(<div>
        <div class="form" style={{width:"min-content"}} onSubmit={handleSubmit}><form>
            <h1 className="heading">Sign Up</h1>
            <input className='inputbox' type="text" placeholder="name" name="name" value={this.state.value} onChange={setName(this.target.value)} required/>
            <input className="inputbox" type="email" placeholder="email" name="email" value={this.state.value} onChange={setEmail(this.target.value)} required/>
            <input className="inputbox" type="password" placeholder="password" value={this.state.value} onChange={setPassword(this.target.value)} name="password" required/>
            <div className="different heading2">Date Of Birth</div>
            <input className="inputbox" type="date" name="dob" value={this.state.value} onChange={setDob(this.target.value)} required/>
            <div className='different heading2'>Gender
            <div className="options"><input type="radio" id="gender" name="gender" value="male" onChange={setGender(this.target.value)} required/>Male</div>      
            <div className='options'><input type="radio" id="gender" name="gender" value="female" onChange={setGender(this.target.value)}  required/>Female</div></div>
            <div><button type="submit" onClick={navigate('/welcome')}>SUBMIT</button></div>
         </form>
        </div>
        </div>)
}

