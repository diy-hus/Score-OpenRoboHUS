import React from 'react';
import {Row, Col, Well} from 'react-bootstrap';
import moment from 'moment';
import cx from 'classnames';
import s from './styles.css';

export default class RealTimeResult extends React.Component {

  zeroFill = (number, width) => {
    width -= number.toString().length;
    if (width > 0) {
      return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // always return a string
  };

  render() {
    const {currentRoundInfo, currentRoundTimeLeft} = this.props;

    // time of the round
    const duration = moment.duration(currentRoundTimeLeft);

    if (this.countdown !== undefined) {
      if (currentRoundTimeLeft === 10000) this.countdown.play();
    }

    if (this.timeout !== undefined) {
      if (currentRoundTimeLeft === 0) this.timeout.play();
	  if (currentRoundTimeLeft === 180000) this.timeout.play();
    }

    const timer = `${this.zeroFill(duration.minutes(), 2)}:${this.zeroFill(duration.seconds(), 2)}`;

    let redScore = 0, redAutoScore = 0, redManualScore = 0, blueScore = 0, blueAutoScore = 0, blueManualScore = 0;
    let redWin = false, blueWin = false;

    if (currentRoundInfo !== undefined) {
	  if (currentRoundInfo.updateScore) {
		this.timeout.play();
		currentRoundInfo.updateScore = false;
	  }
		
      redScore = currentRoundInfo.red.total;
      redAutoScore = currentRoundInfo.red.auto;
      redManualScore = currentRoundInfo.red.manual;

      blueScore = currentRoundInfo.blue.total;
      blueAutoScore = currentRoundInfo.blue.auto;
      blueManualScore = currentRoundInfo.blue.manual;

      if (this.win !== undefined) {
        if (currentRoundInfo.winner !== '') {
          if (currentRoundInfo.winner === 'R') {
            redWin = true;
          }

          if (currentRoundInfo.winner === 'B') {
            blueWin = true;
          }
          this.win.play();
          currentRoundInfo.winner = '';
        }
      }
    }

    return (
      <div style={{marginTop: '2rem'}}>
        <audio ref={(sound) => {
          this.countdown = sound;
        }}>
          <source src={require('../../assets/sounds/countdown.mp3')} type="audio/mpeg">
          </source>
        </audio>
        <audio ref={(sound) => {
          this.timeout = sound;
        }}>
          <source src={require('../../assets/sounds/timeout.mp3')} type="audio/mpeg">
          </source>
        </audio>
        <audio ref={(sound) => {
          this.win = sound;
        }}>
          <source src={require('../../assets/sounds/win.mp3')} type="audio/mpeg">
          </source>
        </audio>
        <Row>
          <Col style={{textAlign: 'center', marginTop: '-9rem'}}>
            <div style={{fontSize: '8rem'}}>
              <span style={{color: 'white', fontFamily: 'utmBebas'}}>OPEN</span>
              <span style={{color: 'red', fontFamily: 'utmBebas'}}> ROBO</span>
              <span style={{color: 'red', fontFamily: 'utmBebas'}}>HUS</span>
              <span style={{color: 'yellow', fontFamily: 'utmBebas'}}> 2019</span></div>
          </Col>
        </Row>
        <Row>
          <Col
            style={{textAlign: 'center', fontSize: '4rem', color: 'white', fontFamily: 'utmBebas', marginTop: '-2rem'}}>
            <div>
              E-Farmer Robot thu hoạch nông nghiệp
            </div>
          </Col>
        </Row>
        <Row style={{marginTop: '1rem'}}>
          <Col xs={4}>
            <div style={{marginLeft: '3rem', marginTop: '-1rem'}}>
              <th className={cx(s.teamName, s.redTeamText)}> red TEAM</th>
              <div className={s.resultTitle}>AUTOMATIC:
                <span className={s.resultValue} style={{marginLeft: '1rem',backgroundColor: '#b81c23'}}>{redAutoScore}</span>
              </div>
              <div className={s.resultTitle}>MANUAL:
                <span className={s.resultValue} style={{marginLeft: '1rem',backgroundColor: '#b81c23'}}>{redManualScore}</span>
              </div>
              <div className={s.resultTitle}>TOTAL:
                <span className={s.resultValue} style={{marginLeft: '1rem',backgroundColor: '#b81c23'}}>{redScore}</span>
              </div>
              <div style={{backgroundColor: 'rgba(0, 0, 0,0.5)', width: '35rem', height: '23rem', marginTop: '1rem'}}/>
            </div>
          </Col>
          <Col xs={4}>
            <Row>
              <Well className={s.timer}>
                <strong>
                  {timer}
                </strong>
              </Well>
            </Row>
            <Row>
              {redWin ? <img src={require('../../assets/images/red_win.png')} style={{marginLeft: '2rem', width: '80%' }} alt="footer" className="block-center" /> : undefined}
              {blueWin ? <img src={require('../../assets/images/blue_win.png')} style={{ marginLeft: '2rem', width: '80%' }} alt="footer" className="block-center" /> : undefined}
            </Row>
          </Col>
          <Col xs={4}>
            <div style={{marginLeft: '3rem', marginTop: '-1rem'}}>
              <th className={cx(s.teamName, s.greenTeamText)}> BLUE TEAM</th>
              <div className={s.resultTitle}>AUTOMATIC:
                <span className={s.resultValue} style={{marginLeft: '1rem',backgroundColor: '#2148ff'}}>{blueAutoScore}</span>
              </div>
              <div className={s.resultTitle}>MANUAL:
                <span className={s.resultValue} style={{marginLeft: '1rem',backgroundColor: '#2148ff'}}>{blueManualScore}</span>
              </div>
              <div className={s.resultTitle}>TOTAL:
                <span className={s.resultValue} style={{marginLeft: '1rem',backgroundColor: '#2148ff'}}>{blueScore}</span>
              </div>
              <div style={{backgroundColor: 'rgba(0, 0, 0,0.5)', width: '35rem', height: '23rem', marginTop: '1rem'}}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
