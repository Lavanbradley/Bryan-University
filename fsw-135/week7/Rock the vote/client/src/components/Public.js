
import React, {useContext} from 'react'

import IssueList from './IssueList.js'
import { UserContext } from '../context/UserProvider.js'

export default function Public() {

const { issues } = useContext(UserContext)
  return (
    <div className = 'issue-container2'>
    <h2>Public posts</h2>
  
   <IssueList issues={issues}/>
   
    </div>
  )
}


