import React from 'react'
import {SearchTerm} from './index'

type Props = {}

export const Search:React.FC<Props> = ({}:Props) => {
    const [searchTerm, setSearchTerm] = React.useState('')

    const onSearchTermChange = (searchTerm: string) => {
        setSearchTerm(searchTerm)
    }

    return(
        <div>
            <SearchTerm searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange} />
        </div>
    )
}