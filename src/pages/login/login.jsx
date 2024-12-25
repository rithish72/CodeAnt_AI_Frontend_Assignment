import grayLogo from '../../assets/gray_logo.svg';
import HeroSection from '../../components/heroSection/HeroSection';
import LoginSection from '../../components/loginSection/LoginSection';

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:relative lg:flex lg:flex-1 lg:items-center lg:justify-center lg:border-r-2">
        <HeroSection />
        <div className="absolute bottom-4 left-4 -z-10 bg-[#FFF]">
          {' '}
          <img
            src={grayLogo}
            className="h-[79.75px] w-[71px] md:h-[159.5px] md:w-[142px] lg:h-[319px] lg:w-[284px]"
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-[#fafafa]">
        <LoginSection />
        <span className="text-[#081735] text-center sm:text-sm md:text-base">
          <span className="text-white pb-[10px]">{'.'}</span>
          By signing up you agree to the <strong>Privacy Policy</strong>.
        </span>
      </div>
    </div>
  );
}
