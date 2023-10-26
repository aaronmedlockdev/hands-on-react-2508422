export default ({member, handleClose, handleChange}) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close" 
          aria-label="close" 
          className="close" 
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            gap:`1rem`
            }}>
            <img style ={{ width:'200px'}} 
              src={`images/${member.slug}_tn.svg`} 
              alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
              <hgroup style={{
                display: "flex",
                gap: '1rem',
                marginTop: '2rem',
                justifyContent: "center"
              }}>
                <a className="outline" 
                  href="#" 
                  role="button"
                  onClick={()=>{handleChange(Number(member.id - 1))}}>
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </a>
                <a className="outline" 
                  href="#" 
                  role="button"
                  onClick={()=>{handleChange(Number(member.id + 1))}}>
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </a>
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  )
}