import React, {useState} from 'react'


function Search(props) {
    const [searchedWord, setSearch] = useState('')
    const onChange = e => {
        setSearch(e.target.value)
    }
    return (
        <form onSubmit={(e) => props.onSubmit(e, searchedWord)}>
            <div className="input-group mb-3 mt-3">
                <input onChange={onChange} type="text" className="form-control" placeholder="Search by activity name"/>
                <div className="input-group-append">
                    <button className="btn btn-success" type="submit">Go</button>
                </div>
            </div>
        </form>
    )
}



export default Search

