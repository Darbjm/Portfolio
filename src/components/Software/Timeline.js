import React from 'react'
import dataxp from '../Data/data-xp'
import TimelineItem from './TimelineItem'

function useOnScreen(options) {
  const ref = React.createRef()
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return [ref, visible]
}

function Timeline() { 
  const [ref, visible] = useOnScreen({ rootMargin: '-1000px' })

  return (
  dataxp.length > 0 &&  (
    <div className='timeline-container'>
      <div className='title-container'>
        <h1 className='xp-title'>EXPERIENCE</h1>
      </div>
        {visible ? (dataxp.map((data, i) => (
          <TimelineItem data={data} key={i}  ref={ref}/> 
          )
        )) : (
          <div style={{minHeight: '30px'}}></div>)}
      <div className='circle-container'>
        <div className='end-circle'> </div>
      </div>
    </div>
    )
  )
}
  

export default Timeline
