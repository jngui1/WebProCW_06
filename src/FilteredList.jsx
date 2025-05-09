import React, { Component } from 'react';
import { DropdownButton, DropdownItem } from 'react-bootstrap';
import List from './List';
import './App.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        //The state is just a list of key/value pairs (like a hashmap)
        //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
        this.state = {
            search: "",
            type: "All"
        };
    }

    //Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
    onFilter = (event) => {
        this.setState({type: event.target.innerHTML})
    }

    //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
    filterItem = (item) => {
        return ((item.name.toLowerCase().search(this.state.search) !== -1) && ((item.type === this.state.type) || (this.state.type === "All")));
    }

    render(){
        return (
            <div className = "filter-list">
                <h1>Produce Search</h1>
                
                <div id="button-div">
                    <DropdownButton id="typeDropdown" title={"Type"}>
                        <div id="options">
                            <DropdownItem eventKey="all" onClick={this.onFilter}>All</DropdownItem><br/>
                            
                            <DropdownItem eventKey="Fruit" onClick={this.onFilter}>Fruit</DropdownItem><br/>
                            
                            <DropdownItem eventKey="Vegetable" onClick={this.onFilter}>Vegetable</DropdownItem><br/>
                            
                        </div>
                        
                    </DropdownButton>
                    
                </div><br/>
                
                <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
                
                <div id="list"><List items = {this.props.items.filter(this.filterItem)} /></div>
                
            </div>
        );
    }
}

export default FilteredList;
