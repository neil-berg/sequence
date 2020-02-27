export const openModal = key => ({
    type: 'modal/open',
    key
});

export const closeModal = key => ({
    type: 'modal/close',
    key
});

export const toggleModal = key => (dispatch, getState) => {
    const isModalOpen = getState().modal[key].open;
    return isModalOpen ? dispatch(closeModal(key)) : dispatch(openModal(key));
};
