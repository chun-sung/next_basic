import React from 'react'
import Lottie from 'react-lottie-player'

// 다운 받은 로티 애니메이션 파일 import 해준다.
import lottieJson from '../../public/animation.json';


export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      // style={{ width: 150, height: 150 }}
    />
  )
}