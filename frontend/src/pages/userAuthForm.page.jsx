import InputBox from "../components/input.component";
import googleicon from "../imgs/google.png"

const UserAuthForm = ({type}) =>{
    return(
        <section className="h-cover flex items-center justify-center">
            <form className=" w-[80%] max-w-[400px]">
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
                            <img src={googleicon} className="w-5 "  />
                            continue with facebook
                        </button>
                    
             
            </form>

        </section>
    )
} 

export default UserAuthForm;