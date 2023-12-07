import React from 'react'
import { homeClasses } from './homeClasses'
import Header from '../../components/Header/Header'

const HomePage = () => {
  const {container, cardContainer, title, description}= homeClasses
  return (
    <>
    <Header/>
    <div className={container}>
      <div className={cardContainer}>
        <h5 className={title}>Firebase Auth</h5>
        <p className={description}>Master complete auth in firebase</p>
      </div>
    </div>
    </>
  )
}

export default HomePage