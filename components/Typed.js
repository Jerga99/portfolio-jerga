import Typed from 'react-typed';

function typed () {
  const roles = ['Developer', 'Tech Enthusiast', 'Team Player']
  return(
    <div>
      <Typed
       loop
        typeSpeed={60}
        backSpeed={60}
        strings={roles}
        backDelay={1000}
        loopCount={0}
        showCursor
        className="self-typed"
        cursorChar="|"
      />
    </div>
  )
}

export default typed
