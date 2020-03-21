import React from 'react';
import { SelectStyleCard } from  "./selectedStyles";
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
            <SelectStyleCard>
            <h2>{this.props.selected.name}</h2>
            </SelectStyleCard>
        )
    }
}

export default SelectedCard;