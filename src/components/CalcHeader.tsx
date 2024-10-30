import { CalcSwitchTheme } from "./CalcSwitchTheme"


export const CalcHeader = () => {
  return (
    <>
        <header className="flex justify-between">
            <h1 className="text-3xl font-bold text-[--color-text-screen]">calc</h1>
            <div className="grid grid-cols-2 grid-rows-2 place-items-center">
                <h2 className='uppercase text-[11px] font-bold text-[--color-text-screen] col-start-1 row-start-2'>theme</h2>
                <div className="col-start-2 row-start-1 row-span-2">
                    <CalcSwitchTheme />
                </div>
                
            </div>
        </header>
    </>
  )
}
