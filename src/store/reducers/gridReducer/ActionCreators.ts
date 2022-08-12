import {AppDispatch} from "../../store";
import {GridStates} from "../../../types/types";
import {gridSlice} from "./gridReducer";

export const handleClickOnCard = (id: number, step: GridStates, dispatch: AppDispatch ) => {
	if (step === GridStates.WAITING_FIRST_CLICK) {
		dispatch(gridSlice.actions.chooseFirstCard(id))
	}
	if (step === GridStates.WAITING_SECOND_CLICK) {
		dispatch(gridSlice.actions.chooseSecondCard(id))
		setTimeout(() => dispatch(gridSlice.actions.checkCards()), 1000)
	}
}