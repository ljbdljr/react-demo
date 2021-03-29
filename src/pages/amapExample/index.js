import React, { useState } from "react"
import { Map, Marker, Polygon } from "react-amap"
import { AUTH_AMAP_KEY, AUTH_AMAP_VERSION } from "../../constants/auto.info"

const AmapExample = (props) => {
  const [path, setPath] = useState([])

  const events = {
    click: (event) => {
      const lnglat = event.lnglat

      console.log("event.lnglat", lnglat)
      console.log("path", [
        ...path,
        { longitude: lnglat.lng, latitude: lnglat.lat },
      ])

      setPath((oldList) => [
        ...oldList,
        { longitude: lnglat.lng, latitude: lnglat.lat },
      ])
    },
  }

  return (
    <div
      style={{ width: "900px", height: "600px", margin: "32px auto" }}
      id="container"
    >
      <Map
        amapkey={AUTH_AMAP_KEY}
        version={AUTH_AMAP_VERSION}
        center={{ longitude: 119.65512, latitude: 27.08255 }}
        zoom={18}
        events={events}
      >
        <Marker
          position={{ longitude: 119.65512, latitude: 27.08255 }}
        ></Marker>
        <Polygon path={path} />
      </Map>
    </div>
  )
}

export default AmapExample
