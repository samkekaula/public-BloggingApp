import InputBox from "../components/input.component";
import googleicon from "../imgs/google.png"
import facebookicon from "../imgs/facebook.png"
import {Link} from "react-router-dom"
import AnimationWrapper from "../common/page-animation";
import { useRef } from "react";
import {Toaster, toast} from "react-hot-toast"
import axios from "axios"

const UserAuthForm = ({type}) =>{

    const authForm = useRef();

    const userAuthThroughServer = (serverRoute, formData) =>{
        
        console.log(import.meta.env.VITE_SERVER_DOMAIN + serverRoute,formData);

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
        .then(({data})=>{
            console.log(data);
        })
        .catch(({response}) =>{
            toast.error(response.data.error)
        })
     

    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        let serverRoute = type == "sign-in" ? "/signin" : "/signup";


        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


        //formData
        let form = new FormData(authForm.current);
        let formData = {};
        
        for(let [key, value] of form.entries()){
            formData[key] = value;
        }
        let {fullname, email, password} = formData;


        // form Validation

        if (fullname){
            if(fullname.length < 3){
                return toast.error("Fullname must be at least 3 letters long")
            }
        }
        
        if(!email.length){
            return toast.error( "Enter Email")
        }
        if(!emailRegex.test(email)){
            return toast.error("Email is invalid ")
        }
        if(!passwordRegex.test(password)){
            return toast.error("Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters")
        }

        
        //end form validation
        userAuthThroughServer(serverRoute, formData)

    }
    return(

        <AnimationWrapper keyValue={type}>

            <section className="h-cover flex items-center justify-center">
                <Toaster/>
                <form ref={authForm} className=" w-[80%] max-w-[400px]">
                    <h1 className=" text-4xl font-gelasio capitalize text-center 
                    mb-24">
                    {type =="sign-in" ? "welcome back" : "Join Nexus"}
                    </h1>

                    {
                        type != "sign-in" ?
                        <InputBox 
                        name='fullname'
                        type="text"
                        placeholder="Full Name"
                        icon="fi-rr-user"
                        />
                        : ""
                    }

                    <InputBox 
                        name='email'
                        type="text"
                        placeholder="Email"
                        icon="fi-rr-envelope"
                        />
                        <InputBox 
                        name='password'                    type="password"
                        placeholder="Password"
                        icon="fi-rr-lock"
                        />

                        <button className="btn-dark center mt-14"
                                type="submit"
                                onClick={handleSubmit}
                        >
                            {type.replace("-", " ")}
                        </button>

                        <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase
                        text-black font-bold">
                            <hr className=" w-1/2 border-black" />
                            <p>or</p>
                            <hr className=" w-1/2 border-black" />

                        </div>
                        
                    
                            <button className="btn-dark flex gap-4 items-center justify-center bg-buttonBlue border-black border-[1px]
                            w-[90%] center text-black
                            center">
                                <img src={googleicon} className="w-5 "  />
                                continue with google
                            </button>
                            <button className="btn-dark flex gap-4 items-center justify-center border-black border-[1px]
                            w-[90%] center text-black mt-5 bg-buttonBlue">
                                <img src={facebookicon} className="w-5 "  />
                                continue with facebook
                            </button>

                            {
                                type == "sign-in" ?
                                <p className=" mt-6 text-dark-grey text-xl text-center">
                                    Don't have an account?
                                    <Link to="/signup" className=" underline text-black text-xl ml-1">
                                    Join Nexus Blog.</Link>
                                </p>
                                :
                                <p className=" mt-6 text-dark-grey text-xl text-center">
                                    Don't have an account?
                                    <Link to="/signin" className=" underline text-black text-xl ml-1">
                                    Sign in here.</Link>
                                </p>
                            }
                        
                
                </form>

            </section>

        </AnimationWrapper>
    )
} 

export default UserAuthForm;