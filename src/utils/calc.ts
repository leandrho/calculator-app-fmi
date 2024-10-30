

export enum OperationCalc{
    Add,
    Subtract,
    Multiply,
    Divide,
    None
}

const stack :number[] = [];
let curOperation :OperationCalc = OperationCalc.None;

const canResolve = ():boolean => {
    return stack.length == 2 && curOperation !== OperationCalc.None;
}

export const addOperand = ( num :number) :void => {
    stack.push(num);
}
export const setOperation = (operation :OperationCalc) :void => {
    if(canResolve())
        resolve();
    curOperation = operation;
}
export const resolve = function() :number | undefined{

    if(stack.length === 1)
        return stack[0];
    
    if(!canResolve() )
        return undefined;

    const op1:number = stack[0];
    const op2:number = stack[1];
    stack.pop();
    stack.pop();
    switch (curOperation) {
        case OperationCalc.Add:
            stack.push(op1 + op2);
        break;
        case OperationCalc.Subtract:
            stack.push(op1 - op2);
        break;
        case OperationCalc.Multiply:
            stack.push(op1 * op2);
        break;
        case OperationCalc.Divide:
            if(op2==0)
                return undefined;
            stack.push(op1 / op2);
        break;
        default:
            break;
    }
    return stack[0];
}