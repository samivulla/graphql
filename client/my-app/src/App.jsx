import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import { fetchJobs } from './lib/queries';

function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(jobs => setJobs(jobs))
  })

  return (
    <>
      <h1>Job Board</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
