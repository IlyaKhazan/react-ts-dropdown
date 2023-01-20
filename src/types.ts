export interface IOption {
    id?: number;
    title: string;
}

export interface IOptionProps {
    title: string;
    type: 'text' | 'checkbox';
}