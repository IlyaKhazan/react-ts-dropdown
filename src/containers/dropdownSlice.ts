import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data";
import { ILanguage } from "../types";

interface IDropdownState {
    languages: ILanguage[],
    chips: ILanguage[],
}

const initialState: any = {
    languages: data,
    chips: [],
}

const dropdownSlice = createSlice(
    {
        name: 'dropdown',
        initialState,
        reducers: {
            languageChecked(state, action: PayloadAction<ILanguage>) {
                if (action.payload.checked) {
                    action.payload = { ...action.payload, checked: false }
                    state.chips = state.chips.filter((chip: ILanguage) => chip.id !== action.payload.id)
                }
                else {
                    action.payload = { ...action.payload, checked: true }
                    state.chips.push(action.payload)
                }
                if (!state.chips.find((chip: ILanguage) => chip.id === action.payload.id)) { state.chips.push(action.payload) }
            },
            chipRemoved(state, action: PayloadAction<ILanguage>) {
                state.chips = state.chips.filter((chip: ILanguage) => chip.id !== action.payload.id)
            },
        }

    }
)

export const { languageChecked, chipRemoved } = dropdownSlice.actions;

export default dropdownSlice.reducer

export const selectLanguages = (state: any) => state.languages.languages;
export const selectChips = (state: any) => state.languages.chips;