const CrewPeople = ({ popularity, role, popularityValue }) => {
  return (
    <div className='crew'>
      {popularityValue ? 'Stars' : `${role}`}:{' '}
      {popularity?.map((crew, index) => (
        <span key={index} className='crew__director'>
          {popularityValue
            ? `${
                crew.known_for_department === role &&
                crew.popularity >= popularityValue
                  ? `${crew.name},`
                  : ''
              }`
            : `${crew.job === role ? crew.name : ''}`}
        </span>
      ))}
    </div>
  )
}

export default CrewPeople
