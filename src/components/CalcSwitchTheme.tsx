import { useState } from "react"


export const CalcSwitchTheme = () => {
    const [curTheme, setCurTheme] = useState(0);
    const handleTheme = ()=>{
        setCurTheme((curTheme+1)%3)
        document.body.classList.remove("theme-"+curTheme)
        document.body.classList.add("theme-"+(curTheme+1)%3);
    }
  return (
    <div className="">
            <div className="text-[--color-text-screen] text-[11px] font-bold flex justify-between px-3"><span>1</span><span>2</span><span>3</span></div>
            <div className="relative w-[72px] h-6 flex items-center px-1 bg-[--color-toggle-keypad-bg] rounded-full">
                <div className={ "absolute w-5 h-5 bg-[--color-key-bg-toggle] rounded-full transition-all filter-bright cursor-pointer " +
                                (curTheme===0?" translate-x-[0px] ":" ") +
                                (curTheme===1?" translate-x-[22px] ":" ") +
                                (curTheme===2?" translate-x-[44px] ":" ") }
                                onClick={()=> handleTheme()}>
                    
                </div>
            </div>
    </div>
  )
}
