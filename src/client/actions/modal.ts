import { CLOSE_MODAL, ModalActionTypes, OPEN_MODAL } from './types';
import { AppThunk, ModalKey } from '../store/types';

export const openModal = (key: ModalKey): ModalActionTypes => ({
  type: OPEN_MODAL,
  key
});

export const closeModal = (key: ModalKey): ModalActionTypes => ({
  type: CLOSE_MODAL,
  key
});

export const toggleModal = (key: ModalKey): AppThunk => (
  dispatch,
  getState
) => {
  const isModalOpen = getState().modal[key].open;
  return isModalOpen ? dispatch(closeModal(key)) : dispatch(openModal(key));
};
