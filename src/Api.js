import React, {Component} from 'react' ;
import axios from 'axios' ;

class Api extends Component {
    state = {
        items :[]
    }
    componentDidMount (){
        axios.get('data.json').then(res=> {this.setState({items:res.data.items})})
    }
    render (){
        const {items} = this.state;
        const itemsList = items.map ( (allItems) => {
            return (
                <div key={allItems.id}>
                    <ul>
                        <li>{allItems.userId}</li>
                        <li>{allItems.id}</li>
                        <li>{allItems.title}</li>
                        <li>{allItems.body}</li>
                        <hr/>
                    </ul>
                </div>
                
            );
        } )

        return (
            <div>
                {itemsList}
            </div>
        )
    }
    
}

export default Api ;