import React from 'react'
import styles from './style.module.css'

function Loading() {
  return (
    <div className={styles.wavyWrapper}>
        <div className={styles.wavy}>
        <span style={{"--i":1}}>L</span>
        <span style={{"--i":2}}>O</span>
        <span style={{"--i":3}}>A</span>
        <span style={{"--i":4}}>D</span>
        <span style={{"--i":5}}>I</span>
        <span style={{"--i":6}}>N</span>
        <span style={{"--i":7}}>G</span>
        <span style={{"--i":8}}>.</span>
        <span style={{"--i":9}}>.</span>
        <span style={{"--i":10}}>.</span>
    </div>
    </div>
  )
}

export default Loading