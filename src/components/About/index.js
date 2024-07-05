import { useEffect, useState } from 'react'
import {
  faAndroid,
  faAngular,
  faAws,
  faCss3,
  faDocker,
  faGit,
  faGitAlt,
  faGooglePlay,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p align="justify">
          Welcome to my portfolio! I am Dhanesh Sawant, a passionate and skilled developer with a strong foundation in computer science and a specialization in business systems. I have a proven track record of delivering high-quality software solutions and contributing to open-source projects.
          </p>
          <p align="justify">
          During my tenure as a Flutter Developer at Pi Techniques Pvt Ltd, I led the development of a comprehensive application for employee time sheet management, significantly enhancing UI/UX and boosting accessibility. I also participated in Hacktoberfest 2023, where I contributed to the Audioplayer flutter package by resolving critical bugs, further honing my problem-solving skills.
          </p>
          <p align="justify">
          I have undertaken several impactful projects, including Contests Reminder app, a Doctor Prescription Reader using TensorFlow and OpenCV and Hostel Connect integrating hostel services in an app. These projects showcase my proficiency in various programming languages and tools, such as Flutter & Dart as well as my ability to deliver practical and innovative solutions.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAndroid} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGit} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAws} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGooglePlay} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
