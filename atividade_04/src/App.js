import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Repositorios></Repositorios>
      </header>
    </div>
  );
}

const Repositorios = () => {
  const [repos, setRepos] = useState([])

  const gatherApiData = async () => {
    const response = await fetch("https://api.github.com/orgs/rocketseat/repos")
    const data = await response.json()

    setRepos(data)
  }

  const repoList = repos.map((repo) => (
    <div style={{fontSize:18}}>
      <div>{repo.name}</div>
      <div>{repo.description}</div>
      <a href={repo.html_url}>Link</a>
      <br />
      <br />
    </div>
  ))
  
  useEffect(() => {
    gatherApiData()
  }, [])

  return (
    <div style={{textAlign: "left"}}>
      <h1 style={{fontSize:30}}>Repositórios</h1>
      {repoList}
    </div >
  )
}

export default App;