import Icons from "../../assets/icons"


function SocialLogin() {

    return(
        <div className='flex flex-col items-center gap-[3px] justify-center h-[62px] w-[116px] bg-black ' >
          <p className='font-ubarnist font-medium text-[14px] text-[#ffffff] ' >Sign Up With</p>
          <div className='flex gap-[16px] items-center h-[32px] w-[80px] ' >
              <div className='flex items-center w-[32px] h-[32px] ' >
                <img width='32px' height={'32px'} src={Icons.facebook} alt="Facebook Icons" />
            </div>
            <div className='flex items-center w-[32px] h-[32px] ' >
                <img width='32px' height={'32px'} src={Icons.googleIcon} alt="Google Icons" />
            </div>
          </div>
        </div>
    )

}


export default SocialLogin;