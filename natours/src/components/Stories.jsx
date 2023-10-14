const storyData = [
  {
    id: 8,
    name: 'Mary Smith',
    subText: 'I had the best week ever with my family',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur in temporibus necessitatibus molestiae, quo ipsum totam numquam quibusdam nesciunt nulla, quas ipsa ipsam delenitin soluta praesentium cupiditate porro beatae!',
  },
  {
    id: 9,
    name: 'Jack Wilson',
    subText: 'Wow! My life is completely different now',
    text:
      'Consectetur adipisicing elit. Repellat consectetur in temporibus necessitatibus molestiae, quo ipsum totam numquam quibusdam nesciunt nulla, quas ipsa ipsam delenitin soluta praesentium cupiditate porro beatae!',
  },
]

const Stories = () => {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video className='bg-video-content' autoPlay muted loop>
          <source src='/video.mp4' type='video/mp4' />
          <source src='/video.webm' type='video/webm' />
          Your browser is not supported
        </video>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most Popular tours</h2>
      </div>

      {storyData.map((data) => (
        <div key={data.id} className='row'>
          <div className='story'>
            <figure className='story-shape'>
              <img
                className='story-image'
                src={`/nat-${data.id}.jpg`}
                alt='Person on a tour'
              />
              <figcpation className='story-caption'>{data.name}</figcpation>
            </figure>
            <div className='story-text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                {data.subText}
              </h3>
              <p>{data.text}</p>
            </div>
          </div>
        </div>
      ))}

      <div className='u-center-text u-margin-top-huge'>
        <a href='#' className='btn-text'>
          Read all stories &rarr;
        </a>
      </div>
    </section>
  )
}

export default Stories
