import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';


const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
export default class ImgGallary extends Component {
  render() {
    return (
      <div>
          <h2 className="text-center p-5 bg-info ">ImgGallary</h2>

   <ImageGallery items={images}/>

      </div>
    )
  }
}
