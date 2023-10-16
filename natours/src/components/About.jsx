const About = () => {
  return (
    <main>
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            Exciting tours for adventures people
          </h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              You're going to fall in love with nature
            </h3>
            <p className='paragraph'>
              Ipsum dolor sit amet consectetur adipisicing elit. Optio,
              obcaecati nihil magnam fugiat laborum ea perspiciatis nam magni,
              modi repudiandae eligendi, voluptatem repellat libero ratione
              dolorum enim voluptatibus consectetur est!
            </p>

            <h3 className='heading-tertiary u-margin-bottom-small'>
              Live adventures like you never have before
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              optio suscipit non nesciunt praesentium. Alias doloribus nostrum .
            </p>
            <a href='#' className='btn-text'>
              Learn more &rarr;
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                srcSet='nat-1.jpg 300w, nat-1-large.jpg 1000w'
                src='nat-1-large.jpg'
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='photo 1'
                className='composition-photo composition-photo-p1'
              />

              <img
                srcSet='nat-2.jpg 300w, nat-2-large.jpg 1000w'
                src='nat-2-large.jpg'
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='photo 2'
                className='composition-photo composition-photo-p2'
              />

              <img
                srcSet='nat-3.jpg 300w, nat-3-large.jpg 1000w'
                src='nat-3-large.jpg'
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='photo 3'
                className='composition-photo composition-photo-p3'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
