import React, { useState } from "react"
import { InfoWindow, Map, Marker, Polygon } from "react-amap"
import { AUTH_AMAP_KEY, AUTH_AMAP_VERSION } from "../../constants/auto.info"
import classes from "./longFor.module.css"

const LongFor = (props) => {
  const [langforVisible, setLangforVisible] = useState(false)

  const MinDongYiYuanEvents = {
    click: (event) => {
      const lnglat = event.lnglat
      console.log("object lnglat", lnglat)
      alert("我爱你")
    },
  }

  const markerEnvets = {
    click: () => {
      setLangforVisible((oldValue) => !oldValue)
    },
  }

  return (
    <div className={classes.amapBox} id="container">
      <Map
        amapkey={AUTH_AMAP_KEY}
        version={AUTH_AMAP_VERSION}
        center={{ longitude: 119.65512, latitude: 27.08255 }}
        zoom={18}
      >
        <Polygon
          path={MinDongYiYuan}
          events={MinDongYiYuanEvents}
          //events={MinDongYiYuanEvents}
        />
        <Marker
          position={{ longitude: 119.65512, latitude: 27.08255 }}
          label={{
            content: `<div><span>ljb love ljr</span></div>`,
            offset: "(0,0)",
          }}
          events={markerEnvets}
          zoom={10}
        />
        <InfoWindow
          position={{ longitude: 119.655115, latitude: 27.08275 }}
          visible={langforVisible}
          content={`<div><h4>Lang For</h4><p>ljb爱ljr</p>  </div>`}
        />
        {/* <div>
            <h4>Lang For</h4>
            <p>ljb爱ljr</p>{" "}
          </div>
        </InfoWindow> */}
      </Map>
    </div>
  )
}

export default LongFor

const MinDongYiYuan = [
  { longitude: 119.65482, latitude: 27.081667 },
  { longitude: 119.653811, latitude: 27.08182 },
  { longitude: 119.653833, latitude: 27.082093 },
  { longitude: 119.653854, latitude: 27.082303 },
  { longitude: 119.653859, latitude: 27.082575 },
  { longitude: 119.653865, latitude: 27.082761 },
  { longitude: 119.653913, latitude: 27.082814 },
  { longitude: 119.654138, latitude: 27.082823 },
  { longitude: 119.654396, latitude: 27.082938 },
  { longitude: 119.654986, latitude: 27.082943 },
  { longitude: 119.655045, latitude: 27.082967 },
  { longitude: 119.655195, latitude: 27.082995 },
  { longitude: 119.655276, latitude: 27.083086 },
  { longitude: 119.655351, latitude: 27.083344 },
  { longitude: 119.655399, latitude: 27.083425 },
  { longitude: 119.655571, latitude: 27.083559 },
  { longitude: 119.655742, latitude: 27.08363 },
  { longitude: 119.655844, latitude: 27.08364 },
  { longitude: 119.655903, latitude: 27.083611 },
  { longitude: 119.656547, latitude: 27.083048 },
  { longitude: 119.65652, latitude: 27.08301 },
  { longitude: 119.655077, latitude: 27.081749 },
  { longitude: 119.654991, latitude: 27.081691 },
]
