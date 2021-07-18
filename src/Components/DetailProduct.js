import React from 'react'
import { connect } from "react-redux"


function DetailProduct({isChoice}) {
    if(!isChoice){
        return <h1>Data is Empty.....</h1>
    }
    const {id,nama,jurusan,IPK} = isChoice
    return (
        <div>
            <h1>{id}</h1>
            <h2>{nama}</h2>
            <h3>{jurusan}</h3>
            <div>{IPK}</div>
        </div>
    )
}

const stateToProp=(state)=>{
    return{
       isChoice: state.ChoiceDataReducer 
    }
}

export default connect(stateToProp)(DetailProduct)