import { OperationCalc } from '../hooks/useCalc';
import { ButtonType } from '../types';
import { getActionButtonByLabel, getDotButton, getNumberButtonByLabel, getOperationButtonByLabel } from '../utils/buttonsFactory';
import { CalcButton } from './CalcButton';

type CalcKeyboardProps = {
    addOperand: { (n:number):void }
    setOperation: { (o:OperationCalc):void }
    del: { ():void }
    clear: { ():void }
    resolve: { ():void }
    addDot: { ():void }
}


export const CalcKeyboard = ({ addOperand, setOperation, del, clear, resolve, addDot }:CalcKeyboardProps) => {
  return (
    <>
    <div className='flex flex-col gap-5 bg-[--color-toggle-keypad-bg] items-center p-6 rounded-lg'>
        <div className='flex gap-3'>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('7')!} buttonAction={()=>addOperand(7)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('8')!} buttonAction={()=>addOperand(8)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('9')!} buttonAction={()=>addOperand(9)}/>
          <CalcButton type={ButtonType.Secondary} buttonInfo={getActionButtonByLabel('del')!} buttonAction={()=>del()}/>
        </div>
        <div className='flex gap-3'>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('4')!} buttonAction={()=>addOperand(4)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('5')!} buttonAction={()=>addOperand(5)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('6')!} buttonAction={()=>addOperand(6)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getOperationButtonByLabel('+')!} buttonAction={()=>setOperation(OperationCalc.Add)}/>
        </div>
        <div className='flex gap-3'>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('1')!} buttonAction={()=>addOperand(1)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('2')!} buttonAction={()=>addOperand(2)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('3')!} buttonAction={()=>addOperand(3)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getOperationButtonByLabel('-')!} buttonAction={()=>setOperation(OperationCalc.Subtract)}/>
        </div>
        <div className='flex gap-3'>
          <CalcButton type={ButtonType.Primary} buttonInfo={getDotButton()} buttonAction={()=>addDot()}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getNumberButtonByLabel('0')!} buttonAction={()=>addOperand(0)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getOperationButtonByLabel('/')!} buttonAction={()=>setOperation(OperationCalc.Divide)}/>
          <CalcButton type={ButtonType.Primary} buttonInfo={getOperationButtonByLabel('x')!} buttonAction={()=>setOperation(OperationCalc.Multiply)}/>
        </div>
        <div className='flex gap-3 w-full'>
          <CalcButton type={ButtonType.SecondaryLarge} buttonInfo={getActionButtonByLabel('reset')!} buttonAction={()=>clear()}/>
          <CalcButton type={ButtonType.TertiaryLarge} buttonInfo={getActionButtonByLabel('=')!} buttonAction={()=>resolve()}/>
        </div>
      </div>
    </>
  )
}
