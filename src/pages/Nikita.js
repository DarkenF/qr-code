import classes from '../App.module.css';
import React from "react";
import clsx from "clsx";

export const Nikita = () => {
  const hideString = (value) => {
    return value.split('').map((item, index) => !index ? item.toUpperCase() : '*').join('')
  }

  const person = {
    fio: {
      lastName: hideString('Андреев'),
      firstName: hideString('Никита'),
      otch: hideString('Олегович'),
    },
    date: '9 января',
    liveness: '20.07.2022',
    dateStart: '20.07.2021'
  }


  return (
    <div className={classes.wrapperOuter}>
      <div className={classes.wrapperInner}>
        <div className={classes.immunePage}>
          <div className={classes.whiteBgStatus}>
            <div className={clsx(classes.contentContainer, classes.centered) }>
              <div className={classes.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                     id="Слой_1" x="0px" y="0px" viewBox="0 0 458 184.001"
                     enableBackground="new 0 0 458 184.001" xmlSpace="preserve">
                  <g>
                    <defs>
                      <rect id="SVGID_1_" y="0.001" width="458" height="184"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                      <use xlinkHref="#SVGID_1_" overflow="visible"/>
                    </clipPath>
                    <path clipPath="url(#SVGID_2_)" fill="#EA221D"
                          d="M228.101,59.83c-7.064,0-13.345,4.409-16.092,8.722   c-1.571-5.194-5.888-8.722-12.952-8.722c-7.163,0-13.443,4.703-15.405,7.644v-6.468h-10.304v47.329h10.304V75.313   c2.158-3.136,6.377-6.371,10.891-6.371c5.592,0,7.85,3.43,7.85,8.527v30.866h10.303V75.214c2.06-3.037,6.377-6.272,10.99-6.272   c5.494,0,7.751,3.43,7.751,8.527v30.866h10.303V74.136C241.739,64.533,236.833,59.83,228.101,59.83"/>
                    <path clipPath="url(#SVGID_2_)" fill="#EA221D"
                          d="M276.476,59.829c-15.012,0-24.334,11.269-24.334,24.792   c0,13.621,9.322,24.89,24.334,24.89c15.208,0,24.434-11.269,24.434-24.89C300.909,71.098,291.684,59.829,276.476,59.829    M276.476,100.398c-8.733,0-13.639-7.351-13.639-15.777c0-8.329,4.905-15.678,13.639-15.678c8.831,0,13.737,7.349,13.737,15.678   C290.213,93.048,285.307,100.398,276.476,100.398"/>
                    <path clipPath="url(#SVGID_2_)" fill="#EA221D"
                          d="M328.874,79.526c-5.595-1.273-10.304-2.253-10.304-5.683   c0-3.333,3.435-5.781,8.831-5.781c5.888,0,11.188,2.448,14.031,5.683l4.318-7.252c-4.318-3.822-10.401-6.662-18.448-6.662   c-11.971,0-18.643,6.662-18.643,14.403c0,10.584,9.716,12.74,17.858,14.503c5.789,1.275,10.793,2.353,10.793,6.271   c0,3.724-3.14,6.369-9.321,6.369c-6.183,0-12.756-3.232-16.093-6.663l-4.709,7.447c4.906,4.801,12.265,7.35,20.312,7.35   c12.756,0,19.722-6.369,19.722-14.699C347.222,83.642,337.115,81.29,328.874,79.526"/>
                    <path clipPath="url(#SVGID_2_)" fill="#EA221D"
                          d="M362.92,95.694c-3.728,0-6.868,3.136-6.868,6.859s3.141,6.859,6.868,6.859   c3.729,0,6.869-3.136,6.869-6.859S366.649,95.694,362.92,95.694"/>
                    <path clipPath="url(#SVGID_2_)" fill="#EA221D"
                          d="M391.966,67.963v-6.958h-10.303v47.33h10.303V76.097   c2.06-3.333,7.85-6.272,12.168-6.272c1.274,0,2.354,0.097,3.237,0.294v-10.19C401.188,59.929,395.499,63.455,391.966,67.963"/>
                    <path clipPath="url(#SVGID_2_)" fill="#EA221D"
                          d="M447.697,61.006v33.219c-2.453,3.233-6.967,6.173-12.168,6.173   c-5.789,0-9.517-2.253-9.517-9.603V61.006h-10.304V94.52c0,9.7,5.006,14.991,15.209,14.991c7.457,0,13.346-3.625,16.779-7.446   v6.271H458v-47.33H447.697z"/>
                    <path clipPath="url(#SVGID_2_)" fill="#EA221D"
                          d="M0,138.773c0,8.749,7.127,15.865,15.887,15.865h43.562v29.362l9.619-10.128   c13.72-14.2,24.633-19.234,41.699-19.234h15.629c8.76,0,15.887-7.116,15.887-15.865V0H0V138.773z M10.472,10.458h121.339v128.315   c0,2.982-2.429,5.407-5.415,5.407h-15.629c-15.032,0-28.008,2.484-42.511,18.343l-0.057-18.343H15.887   c-2.986,0-5.415-2.425-5.415-5.407V10.458z"/>
                  </g>
                </svg>
              </div>
              <div id="print">
                <div className={clsx(classes.heading, classes.headingStatus)}>
                  <div>
                    <h3 className={clsx(classes.h3, classes.small)}>Вакцинирован</h3>
                  </div>
                </div>
                <div style={{
                  marginTop: 24,
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginBottom: 15,
                }}/>
                <div className={classes.statusContainer}>
                  <span className={classes.statusValue}>Действителен</span>
                </div>
                <br/>
                <div>
                  <h4 className={classes.statusParam}>Сведения о заявителе:
                    <br/>{person.fio.lastName} {person.fio.firstName} {person.fio.otch}
                  </h4>
                  <h4 className={classes.statusParam}>Дата рождения: {person.date}</h4>
                  <h4 className={classes.statusParam}>Срок действия: {person.liveness}</h4>
                  <h4 className={classes.statusParam}>Дата получения второго компонента вакцины или однокомпонентной
                    вакцины:
                    {' ' + person.dateStart}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}