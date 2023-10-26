export default({ cast, onChoice }) => {

  return(
    <nav className="container">
      <ul>
        <li>
            <ul>
              <li>
                <a href="#">
                  <img style={{ height:'50px' }} src="images/logo_bug_stargazers.svg" alt="Stargrazers Logo" />
                </a>
              </li>
            </ul>
        </li>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link">Crew</summary>
            <ul role="listbox">
              {cast.map(member => (
                <li key={member.id}>
                  <a onClick={()=>{ onChoice(member) }} 
                    data-tooltip={member.name}>
                      {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  )
}