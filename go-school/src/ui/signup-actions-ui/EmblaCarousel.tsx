import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'

type PropType = {
  slides: any
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ])
  const [isPlaying, setIsPlaying] = useState(true)

  //   console.log(slides)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    // const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    // playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    setIsPlaying(autoplay.isPlaying())
    emblaApi
      .on('autoplay:play', () => setIsPlaying(true))
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
  }, [emblaApi])

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide: any) => {
            const { id, src } = slide

            return (
              <div className='embla__slide' key={id}>
                {/* <div className='embla__slide__number'> */}
                {/* <span>{index + 1}</span> */}
                <img src={src} />
                {/* </div> */}
              </div>
            )
          })}
          {/* {slides.map(slide => (
            const {id, src} = slide
            <div className='embla__slide' key={id}>
              <div className='embla__slide__number'>
                <span>{index + 1}</span>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      <div className='embla__controls'>
        {/* <div className='embla__buttons'>
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div> */}

        {/* <button className='embla__play' onClick={toggleAutoplay} type='button'>
          {isPlaying ? 'Stop' : 'Start'}
        </button> */}
      </div>
    </div>
  )
}

export default EmblaCarousel