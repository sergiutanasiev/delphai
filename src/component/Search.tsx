import React from 'react'
import {SearchTerm} from './index'
import _ from 'lodash'
import * as data from '../api/company_collection.json'


type Props = {}

export const Search:React.FC<Props> = ({}:Props) => {
    const [searchTerm, setSearchTerm] = React.useState('')

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
                    reject()
                }
            }, 500)
        })
    }

    return(
        <div>
            <SearchTerm searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange} />
        </div>
    )
}