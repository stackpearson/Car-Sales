export const addOption = newOption => {
    return { type: 'NEW_OPTION', payload: newOption };
}

export const removeOption = oldOption => {
    return { type: 'OLD_OPTION', payload: oldOption };
}

export const purgeOption = deleteOption => {
    return { type: 'DELETE_OPTION', payload: deleteOption };
}