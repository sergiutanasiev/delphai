import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {InitialState} from '../reducers/searchReducer'
import {Modal, CompanyChart} from './index'

type CompanyCollectionProps = {
    collection?: Array<any>
}

export const CompanyCollection:React.FC<CompanyCollectionProps> = ({collection = []}) => {
    const [company, setCompanyInfo] = React.useState([])
    const [visibility, toggleVisibility] = React.useState(false)
    collection = useSelector<InitialState, InitialState["machedCollection"]>(state => state.machedCollection)
    const dispatch = useDispatch()

    const closeModal = (bool: boolean) => {
        toggleVisibility(bool)
    }

    const handleClick = (item:any) => {
        setCompanyInfo(item)
        toggleVisibility(true)
    }

    const handleShowWebsite = (e:any, url:string) => {
        e.preventDefault()
        window.open(`http://${url}`, '_blank')
    }

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
            <CompanyChart collection={collection}/>
            <section className="a-collection">
                <Modal visibility={visibility}
                    closeModal={closeModal}
                    company={company} />
                {collection.map((item, index) => {
                    return (
                        <article key={index}>
                            <h3>{item.name}</h3>
                            <div className="action">
                                <button onClick={() => handleClick(item)}>More Info</button>
                                <button onClick={(e) => handleShowWebsite(e, item.url)}>Visit Website</button>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
            
        
    )
}