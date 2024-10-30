import { ActionType, type ButtonT } from "../types"

const dotButton :ButtonT= {
        id: 10,
        label: '.',
        value: -1,
        type: ActionType.None,
    }

const createNumberButtons = ():ButtonT[] => {
    const butNumbers: ButtonT[] = [];
    for(let i = 0 ; i <10 ; i++)
        butNumbers.push(
            {
                id: i,
                label: i+'',
                value: i,
                type: ActionType.None,
            }
        );
    
    return butNumbers;
}
const createActionButtons = ():ButtonT[] => {
    const buts: ButtonT[] = [];
    buts.push(
        {
            id: 50,
            label: 'del',
            value: 0,
            type: ActionType.Delete,
        });
        buts.push(
        {
            id: 51,
            label: 'reset',
            value: 0,
            type: ActionType.Reset,
        });
        buts.push(
        {
            id: 52,
            label: '=',
            value: 0,
            type: ActionType.Resolve,
        });
    return buts;
}
const createOperationButtons = ():ButtonT[] => {
    const opbuts: ButtonT[] = [];

    opbuts.push(
        {
            id: 100,
            label: '+',
            value: 1,
            type: ActionType.Add,
        });
    opbuts.push(
        {
            id: 101,
            label: '-',
            value: 2,
            type: ActionType.Subtract,
        });
    opbuts.push(
        {
            id: 102,
            label: 'x',
            value: 3,
            type: ActionType.Multiply,
        });
    opbuts.push(
        {
            id: 103,
            label: '/',
            value: 4,
            type: ActionType.Divide,
        });

    return opbuts;
}

export const numberButtons :ButtonT[] = createNumberButtons();
export const operationButtons :ButtonT[] = createOperationButtons();
export const actionButtons :ButtonT[] = createActionButtons();

export const getNumberButtonByLabel = (label :string): ButtonT | undefined => {
    return numberButtons.find( b => b.label === label);
}
export const getOperationButtonByLabel = (label :string): ButtonT | undefined => {
    return operationButtons.find( b => b.label === label);
}
export const getActionButtonByLabel = (label :string): ButtonT | undefined => {
    return actionButtons.find( b => b.label === label);
}

export const getButtonByLabel = (label :string): ButtonT | undefined => {
    
    let retBut :ButtonT | undefined;
    retBut=getNumberButtonByLabel(label);
    if(retBut)
        return retBut;
    retBut=getOperationButtonByLabel(label);
    if(retBut)
        return retBut;
    retBut=getActionButtonByLabel(label);
    
    return retBut;
}

export const getDotButton = ():ButtonT => dotButton;