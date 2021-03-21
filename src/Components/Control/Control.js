import React from 'react';
import { connect } from 'react-redux';


const Control = (props) => {
    console.log(props.sub);
    return (
        <div>
            <button onClick={() => props.sub()}> - SUB</button>
            <button onClick={() => props.add()}> + ADD</button>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({ type: 'ADD' }),
        sub: () => dispatch({ type: 'SUB' })
    }
}

export default connect(null, mapDispatchToProps)(Control);