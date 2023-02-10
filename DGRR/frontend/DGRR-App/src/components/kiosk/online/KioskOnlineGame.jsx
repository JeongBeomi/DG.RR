import KioskNavBlock from '../KioskNavBlock'
import React, { useEffect, useState } from 'react'
import '../../../scss/KioskOnlineGame.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import OnlineScoreTable from './OnlineScoreTable'
import KioskVideo from './webrtc/KioskVideo'
import { onlineGameBoardChange } from '../../../store/OnlineLoginUser'

const OnlineGamePlayerBlock = () => {
  return (
    <div className="OnlineGamePlayerBlock">
      <div className="OnlineGameProfile"></div>
      <div className="OnlineGamePlayerName"></div>
    </div>
  )
}

const KioskOnlineGame = () => {
  const dispatch = useDispatch()
  // const gamingPlayer = useSelector(state => state.OnlineLoginUser.gamingPlayer)
  const scoreSumArray = useSelector(state => state.OnlineLoginUser.gamingPlayer.gameBoardResult)
  const scoreArray = useSelector(state => state.OnlineLoginUser.gamingPlayer.gameBoard)
  // const location = useLocation()
  // const { random } = location.state

  // useEffect(() => {
  //   console.log('잘 받아왔어' + random)
  // })

  return (
    <div className="KioskBackground">
      <div className="OnlineGameContentBlock">
        <div className="OnlineGamePlayerAndScore">
          <OnlineGamePlayerBlock />
          {/* <div className="OnlineGameScoreBlock"></div> */}
          <OnlineScoreTable scoreSumArray={scoreSumArray} scoreArray={scoreArray} />
          <OnlineGamePlayerBlock />
        </div>
        <div className="OnlineGameDisplayBlock">
          <div className="OnlineGameDisplay">{/* <KioskVideo randomSession={random} /> */}</div>
          <div className="OnlineGameDisplay">{/* <KioskVideo randomSession={random} /> */}</div>
          <div className="OnlineGameHelpCircle">?</div>
        </div>
      </div>
    </div>
  )
}

export default KioskOnlineGame
