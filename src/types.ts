export interface ILanguage {
    id: string;
    title: string;
    checked: boolean
}

export interface IOptionProps {
    title: string;
    type: 'text' | 'checkbox';
}