import React, { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [newStatus, setNewStatus] = useState<string>(props.status)

    useEffect(() => {
        setNewStatus(props.status)
    }, [props.status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    const onEditMode = () => {
        // setNewStatus(props.status)
        setEditMode(true)

    }
    const offEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(newStatus)   
    }

    return (
        <div>
            {
                editMode
                    ? <input value={newStatus} autoFocus onBlur={offEditMode} onChange={onChangeHandler} />
                    : <span onDoubleClick={onEditMode}>{props.status}</span>
            }
        </div>
    )
}
