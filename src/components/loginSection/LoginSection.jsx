import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import azure from '../../assets/azure.svg';
import bitbucket from '../../assets/bitbucket.svg';
import github from '../../assets/github.svg';
import gitlab from '../../assets/gitlab.svg';
import nameLogo from '../../assets/name_logo.svg';
import sso from '../../assets/sso.svg';

export default function LoginSection() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('SAAS');

  return (
    <div className="flex lg:min-h-[500px] md:min-h-full sm:min-h-[500px]  flex-col items-center gap-6 rounded-xl p-12 border bg-white">
      <div>
        <img src={nameLogo} className="lg:h-[50px] lg:w-max] sm:h-[40px] sm:w-max " />
      </div>
      <div className="text-center text-xl font-semibold text-[#081735] sm:text-lg md:text-xl">
        Welcome to CodeAnt AI
      </div>
      <div className="flex w-full justify-center text-[#414651]">
        <button
          className={`sm:w-40 md:w-60  w-full rounded-lg border px-4 py-2 transition-colors ${
            mode === 'SAAS'
              ? 'bg-[#1570EF] text-white'
              : 'hover:bg-[#1570EF] hover:text-white'
          }`}
          onClick={() => setMode('SAAS')}
        >
          SAAS
        </button>

        <button
          className={`sm:w-40 md:w-60 w-full rounded-lg border px-4 py-2 transition-colors ${
            mode === 'other'
              ? 'bg-[#1570EF] text-white'
              : 'hover:bg-[#1570EF] hover:text-white'
          }`}
          onClick={() => setMode('other')}
        >
          Self Hosted
        </button>
      </div>
      <hr className="border-1 -mx-6 w-[calc(100%+3rem)] border-gray-300" />

      <div className="flex flex-col justify-center gap-2 font-semibold">
        {mode === 'SAAS' ? (
          <>
            <button
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-lg border px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-sm sm:w-[250px] md:w-[350px] lg:w-[400px] md:h-[45px] lg:h-[50px] text-sm sm:text-base md:text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <img src={github} className="h-6 w-6" />
              <span>Sign in with Github</span>
            </button>
            <button
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-lg border px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-sm sm:w-[250px] md:w-[350px] lg:w-[400px] md:h-[45px] lg:h-[50px] text-sm sm:text-base md:text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <img src={bitbucket} className="h-6 w-6" />
              <span>Sign in with BitBucket</span>
            </button>
            <button
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-lg border px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-sm sm:w-[250px] md:w-[350px] lg:w-[400px] md:h-[45px] lg:h-[50px] text-sm sm:text-base md:text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <img src={azure} className="h-6 w-6" />
              <span>Sign in with Azure Devops</span>
            </button>
            <button
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-lg border px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-sm sm:w-[250px] md:w-[350px] lg:w-[400px] md:h-[45px] lg:h-[50px] text-sm sm:text-base md:text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <img src={gitlab} className="h-6 w-6" />
              <span>Sign in with GitLab</span>
            </button>
          </>
        ) : (
          <>
            <button
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-lg border px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-sm sm:w-[250px] md:w-[350px] lg:w-[400px] md:h-[45px] lg:h-[50px] text-sm sm:text-base md:text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <img src={gitlab} className="h-6 w-6" />
              <span>Self Hosted GitLab</span>
            </button>
            <button
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-lg border px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-sm sm:w-[250px] md:w-[350px] lg:w-[400px] md:h-[45px] lg:h-[50px] text-sm sm:text-base md:text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <img src={sso} className="h-6 w-6" />
              <span>Sign in with SSO</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
