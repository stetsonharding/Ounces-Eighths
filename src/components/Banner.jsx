import React from 'react'

import "../css/Banner.css"

const Banner = ({bannerTitle}) => {
  return (
    <section className="banner-container">
    <div className="banner">
        <h1 className='banner-heading'>{bannerTitle}</h1>
    </div>

    </section>
  )
}

export default Banner
