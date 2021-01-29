import React, { useEffect } from 'react'
import {CompanyInfo} from '../types/types'

type Props = {
    company: any,
    visibility: boolean,
    closeModal: (visibility: boolean) => void
}

export const Modal:React.FC<Props> = (props:Props) => {
    const [description, setDescription] = React.useState('')
    useEffect(() => {
        // Truncate description
        let tempDesc = props.company.description
        console.log(tempDesc)
        tempDesc = tempDesc.substring(0, (Math.min(400, tempDesc.length)))
        setDescription(tempDesc)
    })
    return(
        <div className={`modal ${props.visibility ? '' : 'hide'}`}>
           <div className="modal-content">
                <h1>{props.company.name}</h1>
                <div className="modal-description">
                    <div className="col">
                        <p>{description}</p>
                    </div>
                    <div className="col">
                        <p><span>Headquerters:</span> {props.company.headquarters}</p>
                        <p><span>Founded:</span> {props.company.founded}</p>
                    </div>
                </div>
                <button className="close-modal" onClick={() => props.closeModal(false)}>Close</button>
           </div>
        </div>
    )
}