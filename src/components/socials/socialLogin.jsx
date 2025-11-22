import Icons from "../../assets/icons";

function SocialLogin() {

    const handleGoogleLogin = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
    };

    return(
        <div className='flex flex-col items-center gap-[6px] justify-center w-[116px] bg-black'>
          <p className='font-ubarnist font-medium text-[11px] text-[#ffffff]'>Sign Up With</p>

          <div className='flex gap-[4px] items-center w-[60px]'>
              
{/*            
            <div className='flex items-center w-[32px] h-[32px]'>
                <img width="24" height="24" src={Icons.facebook} alt="Facebook Icons" />
            </div> */}

           
            <div 
                className='flex items-center w-[32px] h-[32px] cursor-pointer'
                onClick={handleGoogleLogin}
            >
                <img width="24" height="24" src={Icons.googleIcon} alt="Google Icons" />
            </div>

          </div>
        </div>
    );
}

export default SocialLogin;
