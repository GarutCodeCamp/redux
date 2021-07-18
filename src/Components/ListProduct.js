import React, { Component } from 'react'
import {connect} from "react-redux"
import {GetData,ChoiceData} from "../action"


export class ListProduct extends Component {
    
    componentDidMount(){
        this.props.GetData();
    }
    renderList(){
        return this.props.listProd.map(mhs=>{
            return (
                <div key={mhs.id}>
                    <h1 onClick={()=>{
                        this.props.ChoiceData(mhs)
                    }} >{mhs.nama}</h1>
                </div>
            )
        })
    }

    render() {
        console.log(this.props);
        return (
            <div>
               {this.renderList()}
            </div>
        )
    }
}
const stateToProps = (state) =>{
    return{ listProd: state.listProductReducer }
}

export default connect(stateToProps,{GetData,ChoiceData})(ListProduct)
