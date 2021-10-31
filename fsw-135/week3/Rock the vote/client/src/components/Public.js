import React, {useContext} from 'react'

import IssueList from './IssueList.js'
import { UserContext } from '../context/UserProvider.js'
import Comments from './Comments.js'
export default function Public() {

const { issues } = useContext(UserContext)
  return (
    <div className = 'issue-container'>
  
  
   <IssueList issues={issues}/>
   <Comments/>
    </div>
  )
}


