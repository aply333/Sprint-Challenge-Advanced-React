import React from 'react';

// const SelectedCard = props => {
//     console.log(props.selected)
//     return(
//         <>
//         <h1>{props.selected.player}</h1>
//         </>
//     )
// }

class SelectedCard extends React.Component {
    

    render() {
        return(
            <>
            
            <h1>{this.props.selected.player}</h1>
            </>
        )
    }
}

export default SelectedCard;