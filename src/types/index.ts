export enum ActionType {
    None,
    Add,
    Subtract,
    Multiply,
    Divide,
    Delete,
    Reset,
    Resolve,
}

export type ButtonT = {
    id: number
    label: string
    value: number
    type: ActionType
}
export enum ButtonType{
    Primary,
    Secondary,
    Tertiary,
    SecondaryLarge,
    TertiaryLarge
}