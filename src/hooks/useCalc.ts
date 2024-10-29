import { useState } from "react"

export enum OperationCalc{
    Add,
    Subtract,
    Multiply,
    Divide,
    None
};

export const useCalc = () => {

    const [ display, setDisplay]  = useState('0');
    const [ operandOne, setOperandOne ] = useState<string>('');
    const [ operandTwo, setOperandTwo ] = useState<string>('');
    const [ curOperation, setCurOperation ] = useState<OperationCalc>(OperationCalc.None);


    const canResolve = ():boolean => {
        return operandTwo.length>0 && curOperation !== OperationCalc.None;
    }

    const addOperand = ( num :number) :void => {
        if( curOperation === OperationCalc.None ){
            setOperandOne(String(+(operandOne+num)));
            setDisplay(String(+(operandOne+num)));
        }
        else{
            setOperandTwo(String(+(operandTwo+num)));
            setDisplay(String(+(operandTwo+num)));
        }
    }
    const addDot = () :void => {
        const dot = '.';
        if( curOperation === OperationCalc.None ){
            if(operandOne.includes('.'))
                return;
            const o = operandOne!==''?operandOne: '0';
            setOperandOne( o+dot );
            setDisplay( o+dot );
        }
        else{
            if(operandTwo.includes('.'))
                return;
            const o = operandTwo!==''?operandTwo: '0';
            setOperandTwo( o+dot );
            setDisplay( o+dot );
        }
    }
    const setOperation = (operation :OperationCalc) :void => {
        if(operandOne == ''){
            addOperand(+display);
        }
        setCurOperation(operation);
    }
    const resolve = function() :number | undefined{

        if(!canResolve() )
            return undefined;
        
        const op1:number = +operandOne;
        const op2:number = +operandTwo;
        let res  :number;
        switch (curOperation) {
            case OperationCalc.Add:
                res= op1 + op2;
            break;
            case OperationCalc.Subtract:
                res= op1 - op2;
            break;
            case OperationCalc.Multiply:
                res= op1 * op2;
            break;
            case OperationCalc.Divide:
                if(op2==0)
                    return undefined;
                res= op1 / op2;
            break;
            default:
                res=0;
                break;
        }
        setOperandOne('');
        setOperandTwo('');
        setCurOperation(OperationCalc.None);
        setDisplay(String(res));
        return res;
    }
    const del = () => {
        let num :string= operandOne;
        num = num.substring(0, num.length-1);
        if(num.length && num[num.length-1]=='-')
            num = num.substring(0, num.length-1);
        if(!num.length)
            num='0';
        setOperandOne(num);
        setDisplay(num);
    }
    const clear = () => {
        setOperandOne('');
        setOperandTwo('');
        setDisplay('0');
        setCurOperation(OperationCalc.None);
    }
  return {
    display,
    addOperand,
    setOperation,
    resolve,
    del,
    clear,
    addDot,
  }
}
