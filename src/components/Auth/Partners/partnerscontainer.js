import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import PartnerCard from './partnercard'
import { AuthUser, fetchURL } from '../../../App'
import { v4 as uuid } from 'uuid'

const PartnersContainer = () => {

    const [user, setUser] = useContext(AuthUser)
    const [partners, setPartners] = useState([])

    useEffect(()=>{

        const promises = [

            //fetching all possible partners
            fetch(`${fetchURL}/users`)
            .then(res=>res.json())
            .then(json=>setPartners(json))
            .catch(error=>console.log(error)),

            //filtering out any ignored partners
            fetch(`${fetchURL}/ignores/${user.id}/list`, {
                headers: {
                    "Authorization": document.cookie,
                }
            })
            .then(res=>res.json())
            .then(json=>{
                let newArr = partners.filter(partner=>!json.include(partner.id))
                setPartners(newArr)
            })
            .catch(error=>console.log(error))

        ]
        
        const setData = async () => {
            const results = await Promise.all(promises)
            // return results
            console.log(results)
            // console.log(await Promise.all(promises))
        }

        setData()
        
        // .then(responses=>responses.map((res)=>res.json()))
        // .then((vals)=>{
        //     let partnersArr = vals
        //     console.log(partnersArr)
            // vals.forEach(()=>console.log(vals))
            // let filteredPartners = partnersArr.filter((partner)=>partner.id !== user.id)
            // console.log(filteredPartners)
            // setPartners(partnersArr.filter((partner)=>partner.id !== user.id && !ignoresArr.includes(partner.id)))
        // })
    }, [])

    const ignorePartner = (id) => {

        fetch(`${fetchURL}/ignores`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                ignored_user: id
            })
        })

        let newArr = partners
        newArr = newArr.filter((p)=>{
            return p.id !== id
        })
        setPartners(newArr)
    }

    const showGoals = () => {

    }


    const makePartnersList = () => {
        if (!partners.length) return <h1>Uh oh! No partners available.</h1>
        return partners.map((partner)=>{
            return <PartnerCard key={partner.id} info={partner} ignore={ignorePartner}/>
        })
    }

    return <PartnersList>
        {makePartnersList()}
    </PartnersList>
}

export default PartnersContainer

const PartnersList = styled.ul`
    grid-area: 2/2/span 17/ span 3;
    display: flex;
    flex-direction: column;
    padding: 5vh 5vh;
    align-items: center;
    overflow-y: scroll;
    background-color: hsla(213, 20%, 36%, 0.7);

    div:first-child {
        margin-top: 0px;
    }

    ::-webkit-scrollbar {
        width: .75vw;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #6F7179; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #5A5C64; 
    }
`