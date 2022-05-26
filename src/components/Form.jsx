import React, {  useRef, useState } from 'react'

const Form = () => {
const [form, setForm] = useState({
  // name: "",
  // email: "",
  // password: "",
  // age: 0,
  // isIndian: false,

});
const ref = useRef();
const passRef = useRef();

const handleChange = (e) => {
  let {type, name, value, files, checked } = e.target;
    console.log(type, name, value, files, checked)
  // if(e.keyCode === 13){
  //   console.log("press Enter Key")
  // }
  // if(e.keyCode === 32){
  //   console.log("press Space Key")
  // }
  if(type === "checkbox"){
  setForm ({
    ...form, [name]: checked,
  })
} else if(type === "file"){
  setForm ({
    ...form, [name]: files,
  })
}
else {
  setForm ({
    ...form, [name]: value,
  })
}
}
const handleOnSubmit = (e) =>{
  e.preventDefault();
  console.log(form);
  if(!form.username) ref.current.focus();
  else if (!form.password) passRef.current.focus();
};

  return (
    <div>Form 

      <form onSubmit={handleOnSubmit}>
        <div>
          <label >Name:</label>
          <input type="text"  placeholder='Enter name...'
          ref={ref}
          value={form.username}
          onChange={handleChange}
         />
        </div>
        <div>
        <label >Age:</label>
          <input type="Number"  placeholder='Age'
          value={form.userage}
          onChange={handleChange}/>
        </div>
        <div>
        <label >Email:</label>
          <input type="email"  placeholder='Enter mail...'
           value={form.useremail}
           onChange={handleChange}/>
        </div>
        <div>
        <label >Password:</label>
          <input type="password"  placeholder='Password'
          ref={passRef}
          value={form.userpassword}
          onChange={handleChange}/>
        </div>
        <div>
        <label >City:</label>
          <select name="city" value={form.city}
          onChange={handleChange}>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="punjab">punjab</option>
          </select>
        </div>
        <div>
        {/* <label >Nationality:</label> */}
          <input type="checkbox" name="isIndian"
          checked={form.isIndian}
          onChange={handleChange}/>
          <label >Is Indian</label>
        </div>
        <div>
       
          <input type="radio"  name='Male'
          value={form.Male}
          onChange={handleChange}/>
           <label >Male</label>
        </div>
        <div>
       
       <input type="radio"  name='Female'
       value={form.feMale}
       onChange={handleChange}/>
        <label >Female</label>
     </div>
     <div>
        <label >user Resume:</label>
          <input type="file" accept='image/png, image/jpeg, application/pdf' name='resume'
          files={form.resume}
          onChange={handleChange}/>
        </div>
        <button type= "submit">Submit</button>
      </form>
    </div>
  )
}

export default Form