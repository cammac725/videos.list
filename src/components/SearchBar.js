import React from 'react'

export class SearchBar extends React.Component {
    state = { term: ''}

    onInputChange = e => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                    </div>
                    <input
                        type='text'
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
