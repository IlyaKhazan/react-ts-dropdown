import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data";
import { ILanguage } from "../types";

interface IDropdownState {
    languages: ILanguage[],
    chips: ILanguage[],
}

const initialState: IDropdownState = {
    languages: data,
    chips: [],
}

const dropdownSlice = createSlice(
    {
        name: 'dropdown',
        initialState,
        reducers: {
            languageChecked(state, action: PayloadAction<ILanguage>) {
                const language = state.languages.find((el: ILanguage) => el.id === action.payload.id)
                if (!language) {
                    return
                }
                if (action.payload.checked) {
                    language.checked = false
                    state.chips = state.chips.filter((chip: ILanguage) => chip.id !== action.payload.id)
                    //state.chips = state.chips.filter((chip: ILanguage) => chip.id !== action.payload.id)
                }
                else {
                    language.checked = true
                    state.chips.push(action.payload)
                }
            },
            chipRemoved(state, action: PayloadAction<ILanguage>) {
                state.chips = state.chips.filter((chip: ILanguage) => chip.id !== action.payload.id)
                const language = state.languages.find((el: ILanguage) => el.id === action.payload.id)
                if (!language) {
                    return
                }
                language.checked = false
            },
        }

    }
)

export const { languageChecked, chipRemoved } = dropdownSlice.actions;

export default dropdownSlice.reducer

export const selectLanguages = (state: { languages: IDropdownState }) => state.languages.languages;
export const selectChips = (state: { languages: IDropdownState }) => state.languages.chips;