
export const emailValidatorFn = (value) => (value.trim().length > 10 && value.trim().includes('.') && value.trim().includes('@'))

export const passwordValidatorFn = (value) => value.trim().length > 4
