import React, {useEffect} from 'react'
import {SearchTerm} from './index'
import _ from 'lodash'
import * as data from '../api/company_collection.json'

type Props = {}

// A list of error messages
enum ErroMessages {
    Empty = '',
    NoMatch = 'No macthed results',
    Short = 'Searched therm must be longer than 3 characters'
}

export const Search:React.FC<Props> = ({}:Props) => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [errorLog, setSerror] = React.useState('')

    const onSearchTermChange = (searchTerm: string) => {
        setSearchTerm(searchTerm)
        if (searchTerm.length > 3) {
            delayQuery(searchTerm)
        }
    }

    const delayQuery = _.debounce(searchTerm => getMatchingCompany(searchTerm), 750)

    const getMatchingCompany = async(searchTerm: string) => {
        await fetchDataPromise(searchTerm)
        .then(response => {
            console.log(response)
        }).catch((error) => {
            setSerror(error)
        })
    }

    const fetchDataPromise = (searchTerm: string):Promise<any> => {
        // Make a local copy
        let fakeApiData:any = Object.assign({}, Object.values(data)[0])
        let results:Array<any> = []
        // Run a promise and return macthed results
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                for (let i in fakeApiData) {
                    if (fakeApiData[i].name.toLowerCase().includes(searchTerm)) {
                        results.push(fakeApiData[i])
                    }
                }
                if (results.length !== 0) {
                    resolve(results)
                } else {
                    // Error message to output
                    reject(ErroMessages.NoMatch)
                }
            }, 500)
        })
    }

    useEffect(() => {
        // Case search term has 0 characters and an error is present
        // Remove the error message since the user is not currenly looking for anything
        if (searchTerm.length === 0 && errorLog.length !== 0) {
            // Empty the collection of companies
            setSerror(ErroMessages.Empty)
        }
        // Case search term is bigger than 3 but and error message is already present
        // And its not the case of No match error
        if (searchTerm.length > 3 && 
            (errorLog !== ErroMessages.NoMatch && errorLog.length !== 0)) {
                setSerror(ErroMessages.Empty)
        }
        // Set new error message
        // Case search term is shorter than 4 characters but bigger than 0 (search input has at least one character)
        if ((searchTerm.length <= 3 && searchTerm.length > 0) &&
            errorLog.length === 0) {
                setSerror(ErroMessages.Short)
        }
    })

    return(
        <div>
            <SearchTerm searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange} />
            <p className={`error-log ${errorLog.length === 0 ? 'hide' : 'show'}`}>{errorLog}</p>
        </div>
    )
}