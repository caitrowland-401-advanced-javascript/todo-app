import React, {useContext} from 'react'
import { SettingsContext } from '../../context/Settings'
import './pagination.scss'

function PaginationSetter () {
    const settings = useContext(SettingsContext)

    return (
        <div>

        Number of tasks to display per page: <input type="number" min={0} max={20} onChange={e => settings.changePagination(e.target.value)}></input>
        </div>
    )
}

export default PaginationSetter