import React from 'react'
import Layout from '../../component/Layouts/Layout'
import Gallerycontent from '../../component/Gallery/Gallerycontent'
import GalleryHeading from '../../component/Gallery/GalleryHeading'

const Gallery = () => {
  return (
    <div>
      <Layout>
        <GalleryHeading/>
        <Gallerycontent/>
      </Layout>
    </div>
  )
}

export default Gallery
