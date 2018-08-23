import React from 'react';
import { connect } from 'react-redux';
import constants from './constants';
import './LiveInput.css';

const ADD_MSG = constants.ADD_MSG;

function LiveInput(props) { 
    return ( 
        <div className='text-area'>
            <div className='input-area'>
                <h4 className='in-t'>
                    INPUT: 
                </h4>
                <div>
                    <input className='in-b' value={props.msg} onChange={props.inputChanged} placeholder='Enter text here'/>
                </div>
            </div>
            <hr/>
            <div className='output-area'>
                <h4 className='out-t'>OUTPUT: </h4>
                <div className='out-b'>{props.msg}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        msg: state.msg
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged: (event) => {
            const action = { type: ADD_MSG, msg: event.target.value }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveInput);