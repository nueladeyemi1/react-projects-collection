const SubHome = ({ className, icon, type, area, location }) => {
  return (
    <div className={`home-${className}`}>
      <svg>
        <use xlinkHref={`/sprite.svg#icon-${icon}`} />
      </svg>
      <p>{location}</p>
      <p>{type}</p>
      <p>
        {area}
        {area ? <sup>2</sup> : ''}
      </p>
    </div>
  )
}

export default SubHome
