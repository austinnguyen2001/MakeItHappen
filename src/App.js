import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';
import { connect } from "react-redux";
import { setItems } from "./redux/actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
        this.handleSearch = this.handleSearch.bind(this);
    }

    async componentDidMount() {
        await this.fetchData("straw", 5);
    }

    async fetchData(query, limit) {
        // Probably should put try catch for error handling
        const response = await axios.get(`http://localhost:2000/search?q=${query}&limit=${limit}`);

        this.props.dispatch(setItems(response.data.content));
    }

    async handleSearch(evt) {
        evt.preventDefault();

        this.fetchData(this.state.query, 5);
    }

    updateQuery(newQuery) {
        this.setState(() => ({ query: newQuery }));
    }

    render() {
        return (
            <div className="app">
                <form id="app__search" onSubmit={this.handleSearch}>
                    <label id="app__search__question">
                        What do you want to search for?
                    </label>
                    <input
                        type="text"
                        value={this.state.query}
                        onChange={e => this.updateQuery(e.target.value)}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <div id="app_items__container">
                    {this.props.items.map((drink, index) => <Item key={index} {...drink} />)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ items: state.items });

export default connect(
    mapStateToProps
)(App);
