const Popup = () => {
  return (
    <div id='popup' className='popup'>
      <div className='popup-box'>
        <div className='popup-left'>
          <img src='/nat-8.jpg' alt='Tour photo' className='popup-img' />
          <img src='/nat-9.jpg' alt='Tour photo' className='popup-img' />
        </div>
        <div className='popup-right'>
          <a href='#section-tours' className='popup-close'>
            &times;
          </a>
          <h2 className='heading-secondary u-margin-bottom-small'>
            Start booking now
          </h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Important &mdash; Please read these terms before booking
          </h3>
          <p className='popup-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            autem eligendi quisquam praesentium qui delectus facilis reiciendis,
            dolor suscipit fuga voluptatum corrupti expedita nesciunt labore,
            magni exercitationem corporis aspernatur? Doloremque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Et rem tenetur quasi
            error culpa, tempora labore quae quis perferendis vel, neque
            repellendus fuga ipsam quaerat. Sit velit eveniet nesciunt eius!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            voluptatibus quas itaque voluptate quibusdam, eligendi soluta
            perferendis exercitationem illum aut voluptatem vel maiores.
            Corrupti veritatis consequatur consequuntur sint commodi nisi? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            accusamus.
          </p>
          <a href='#' className='btn btn-green'>
            Book now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Popup
