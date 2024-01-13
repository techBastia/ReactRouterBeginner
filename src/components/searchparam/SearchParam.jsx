import React from 'react'
import {useSearchParams} from 'react-router-dom'

const SearchParam = () => {

    const [searchParam, setSearchParam] = useSearchParams();
    const showActiveUsers = searchParam.get('filter') === 'active'
  return (
    <>
        <h1>first user</h1>
        <h1>second user</h1>
        <h1>third user</h1> 
            
            <button onClick={()  => setSearchParam({filter : 'active'})}> Active Users </button>

        <button onClick={() => setSearchParam({})}> Reset Users</button>
        {
            showActiveUsers ? <h1>this is active users</h1> : <h2>showing all users</h2>
        }
    </>
  )
}

export default SearchParam
