
export const CalcDisplay = ({display}:{display:string}) => {
  return (
    <div className="sm:max-w-[540px] w-full h-[88px] sm:h-[128px] bg-display flex items-center justify-end rounded-md bg-[--color-screen-bg]">
        <p className="text-5xl px-8 text-[--color-text-screen] font-bold">{display}</p>
    </div>
  )
}
