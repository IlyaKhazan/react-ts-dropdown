import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
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

export const revertAll = createAction('REVERT_ALL')

const dropdownSlice = createSlice(
    {
        name: 'dropdown',
        initialState,
        reducers: {
            multiChecked(state, action: PayloadAction<ILanguage>) {
                const language = state.languages.find((el: ILanguage) => el.id === action.payload.id)
                if (!language) {
                    return
                }
                if (action.payload.checked) {
                    language.checked = false
                    state.chips = state.chips.filter((chip: ILanguage) => chip.id !== action.payload.id)
                }
                else {
                    language.checked = true
                    state.chips.push(action.payload)
                }
            },
            singleChecked(state, action: PayloadAction<ILanguage>) {
                state.chips[0] = action.payload
            },
            chipRemoved(state, action: PayloadAction<ILanguage>) {
                state.chips = state.chips.filter((chip: ILanguage) => chip.id !== action.payload.id)
                const language = state.languages.find((el: ILanguage) => el.id === action.payload.id)
                if (!language) {
                    return
                }
                language.checked = false
            },
        },
        extraReducers(builder) {
            builder.addCase(revertAll, () => initialState)
        }
    }
)

export const { multiChecked, singleChecked, chipRemoved } = dropdownSlice.actions;
export const selectLanguages = (state: { languages: IDropdownState }) => state.languages.languages;
export const selectChips = (state: { languages: IDropdownState }) => state.languages.chips;
export default dropdownSlice.reducer
