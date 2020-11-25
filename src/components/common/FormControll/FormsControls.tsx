import React from 'react'
import s from './FormControl.module.css'

type PropsType = {
    input: any
    meta: any
}

export const Textarea: React.FC<PropsType> = ({
    input, meta, ...props
}) => {
    const showError = meta.touched && meta.error
    return (
        <div >
            <div >
                <textarea {...input} {...props} className={showError ? s.formControlError : s.formControl} />
            </div>
            {showError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<PropsType> = ({
    input, meta, ...props
}) => {
    const showError = meta.touched && meta.error
    return (
        <div >
            <div >
                <textarea {...input} {...props} className={showError ? s.formControlError : s.formControl} />
            </div>
            {showError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    )
}
