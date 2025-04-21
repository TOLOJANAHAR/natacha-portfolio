export default function Header() {
    return (
      <div className="w-[1920px] min-h-[101.33px] absolute top-0 left-0 inline-flex">
        {/* Left part */}
        <div className="w-[1418.67px] flex items-center bg-[#F7F7F7] border-t-2 border-b-2 border-[#000F1D] px-[26.67px] py-2">
          <div className="text-[#000F1D] text-[24px] font-medium leading-[28.8px] font-['TWK Everett']">
            Natacha TOLOJANAHARY
          </div>
        </div>
  
        {/* Right part */}
        <div className="w-[501.33px] flex items-center justify-center gap-[10.7px] bg-[#000F1D]">
          <div className="text-[#00BFFF] text-[16px] font-normal leading-[16px] font-[Arial]">&lt;date&gt;</div>
          <div className="text-[#F7F7F7] text-[18.7px] font-medium leading-[23.33px] tracking-[0.19px] font-['TWK Everett']">
            February-May, 2025
          </div>
          <div className="text-[#00BFFF] text-[16px] font-normal leading-[16px] font-[Arial]">&lt;/date&gt;</div>
        </div>
      </div>
    );
  }
  