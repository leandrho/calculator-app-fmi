import{ ButtonType, type ButtonT } from "../types"


type CalcButtonInfo = {
  buttonInfo :ButtonT
  type : ButtonType
  buttonAction: {
    ():void
  }
}

export const CalcButton = ( {type, buttonInfo, buttonAction}: CalcButtonInfo ) => {
  let after :string = "";
  let styles:string = 'pt-6 flex items-center justify-center py-4 px-8 rounded-lg cursor-pointer filter-bright font-bold text-3xl h-[60px] ';
  if(type == ButtonType.Secondary || type == ButtonType.SecondaryLarge || type == ButtonType.Tertiary || type == ButtonType.TertiaryLarge){
    styles+=" text-xl  uppercase ";
    if(type == ButtonType.Tertiary){
      styles+= " bg-[--color-key-bg-toggle] text-[--color-text-resolve] w-[60px] sm:w-[100px] " ;
      after += " bg-[--color-key-shadow2] ";
    }
    else if(type == ButtonType.TertiaryLarge){
      styles+= " bg-[--color-key-bg-toggle] text-[--color-text-resolve] w-full" ;
      after += " bg-[--color-key-shadow2]";
    }
    else if(type == ButtonType.SecondaryLarge){
      styles+= " bg-[--color-key-bg] text-[--color-text-screen] w-full "
      after += " bg-[--color-key-shadow]"
    }
    else {
      styles+= " bg-[--color-key-bg] text-[--color-text-screen] w-[60px] sm:w-[100px]"
      after += " bg-[--color-key-shadow]"
    }
  }
  else{
    styles+=" bg-[--color-light-key-bg] text-[--color-text-main] w-[60px] sm:w-[100px] ";
    after += " bg-[--color-light-key-shadow]";
  }

  return (
    <div className={"flex w-full rounded-lg" + after}>
      <button 
        className={ styles + " relative top-[-4px] "}
        onClick={()=>{buttonAction()}}
        >
          {buttonInfo.label}
      </button>
    </div>
  )
}
