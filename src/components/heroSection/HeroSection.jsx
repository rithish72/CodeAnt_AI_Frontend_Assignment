import { FaArrowUpLong } from 'react-icons/fa6';
import antLogo from '../../assets/ant_logo.svg';
import pieChart from '../../assets/pie_chart.svg';

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="mb-6 divide-y divide-gray-300 rounded-2xl bg-white shadow-all-sides-dark">
        <div className="mb-4 flex items-center px-6 pb-3 pt-6">
          <img src={antLogo} alt="Ant Logo" className="h-6 w-6" />
          <div className="w-[10px] h-[20]"></div>
          <span className="text-md font-bold text-[#081735] w-[300px] ">
            AI to Detect & Autofix Bad Code
          </span>
        </div>
        <div className="flex justify-around px-6 pb-6 pt-3">
          <div className="flex justify-center">
            <div className="text-center font-bold text-[16px]">
              30+
              <br />
              <span className="text-[14px] font-normal text-gray-600">Languages Support</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="text-center font-bold text-[16px]">
              10K+
              <br />
              <span className="text-[14px] font-normal text-gray-600">Developers</span>
            </div>

          </div>
          <div className="flex justify-center">
            <div className="text-center font-bold text-[16px]">
              100K+
              <br />
              <span className="text-[14px] font-normal text-gray-600">Hours Saved</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 -right-2 z-10 w-[280px] translate-y-10 rounded-2xl bg-white p-4 shadow-all-sides-dark">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <img src={pieChart} alt="Pie Chart" className="h-[50px] w-[50px]" />
          </div>
          <div className="text-center text-sm font-semibold">
            <span className="flex items-center justify-center text-[#0049C6]">
              <FaArrowUpLong className="mr-1" />
              14%
            </span>
            <span className="text-[14px] font-normal text-gray-600 inline-block">This Week</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-[14px] font-normal text-gray-600 flex items-center justify-center">Issues Fixed</div>
        </div>
        <div className="mt-1 w-[80px] h-[28px] text-2xl font-bold flex items-center justify-center">500K+</div>
      </div>
    </div>
  );
}
