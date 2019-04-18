import React from 'react'
import {connect} from 'react-redux'
import {IncNo} from  '../reduce/Action/Action'

const CountShow = (props) => {

    const incrementNumber = () =>{
        props.dispatch(IncNo(props.CountNumber))

    }

    return( 
        <div>
            
            <div>{props.CountNumber}</div>
            <div onClick= {incrementNumber}>Click Me</div>
        </div>
    )
}
const mapStoreToProps = (store) => {
    return {
        CountNumber : store.countReducer
    }
}
export default connect(mapStoreToProps)(CountShow);