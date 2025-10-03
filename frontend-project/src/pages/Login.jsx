// import React, { useState } from 'react'

// const Login = () => {

//   const [currentState, setCurrentState] = useState('Sign Up');

//   const onSubmitHandler = async (event) =>{
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//         <div className='inline-flex items-center gap-2 mb-2 mt-10'>

//             <p className='prata-regular text-3xl'>{currentState}</p>
//             <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>
//         </div>
//        {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='UserName'   required/>}
//         <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Email'  required />
//         <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

//         <div className='w-full flex justify-between text-sm mt-[-8px]'>
//           <p className='cursor-pointer'>Forget your password?</p>
//           {
//             currentState === 'Login'
//             ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
//             : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
//           }
//         </div>
//           <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//       </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username:
      currentState === "Sign Up"
        ? Yup.string().required("Username is required")
        : Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (currentState === "Sign Up") {
        const user = {
          username: values.username,
          email: values.email,
          password: values.password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("User registered successfully!");
        setCurrentState("Login");
        formik.resetForm();
      } else {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (
          storedUser &&
          storedUser.email === values.email &&
          storedUser.password === values.password
        ) {
          navigate("/");
        } else {
          alert("Invalid credentials");
        }
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === "Login" ? (
          ""
        ) : (
          <>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="UserName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              required
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-sm w-full">
                {formik.errors.username}
              </div>
            )}
          </>
        )}

        <input
          type="text"
          name="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm w-full">
            {formik.errors.email}
          </div>
        )}

        <input
          type="password"
          name="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm w-full">
            {formik.errors.password}
          </div>
        )}

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forget your password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
