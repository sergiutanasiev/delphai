import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {InitialState} from '../reducers/searchReducer'

type CompanyCollectionProps = {
    collection?: Array<any>
}

export const CompanyCollection:React.FC<CompanyCollectionProps> = ({collection = []}) => {
    collection = useSelector<InitialState, InitialState["machedCollection"]>(state => state.machedCollection)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])


    if (collection.length === 0) {
        return(
            <div>
                <p className="a-title text-align-center">Company list is empty. Use the search bar</p>
            </div>
        )
    }

    return(
        <div>
            <section className="a-collection">
                {collection.map((item, index) => {
                    return (
                        <article key={index}>
                            <h3>{item.name}</h3>
                            <div className="action">
                                <button>More Info</button>
                                <button>Visit Website</button>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
            
        
    )
}