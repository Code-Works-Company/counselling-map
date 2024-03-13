import React, { useState, useEffect, useRef, memo } from 'react'
import { default as OLMap } from 'ol/Map.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import { useGeographic } from 'ol/proj.js'
import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import OSM from 'ol/source/OSM.js'
import { icon } from '../mapFeatures'
import StadiaMaps from 'ol/source/StadiaMaps'

export default function Map({ schools, setOpen }) {
  useGeographic()
  const ref = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const vectorLayer = new VectorLayer()
    const view = new View({
      center: [105.7948, 21.1454],
      zoom: 11,
    })

    if (ref.current && !mapRef.current) {
      mapRef.current = new OLMap({
        layers: [
          new TileLayer({
            source: new StadiaMaps({
              layer: 'alidade_smooth',
              retina: true,
            }),
          }),
          vectorLayer,
        ],
        view: view,
        target: ref.current,
      })
    }
    const map = mapRef.current

    const markers = schools.map((school) =>
      icon(school.location, 'school', school.logo, 0.5, [0.5, 100])
    )

    map
      .getLayers()
      .getArray()
      .filter((layer) => layer instanceof VectorLayer === true)
      .forEach((layer) => map.removeLayer(layer))

    const vectorSource = new VectorSource({
      features: markers,
    })

    map.addLayer(
      new VectorLayer({
        source: vectorSource,
        name: 'markers',
        zIndex: 2,
      })
    )

    const padding = 0.01
    const extent = [
      vectorSource.getExtent()[0] - padding,
      vectorSource.getExtent()[1] - padding / 2,
      vectorSource.getExtent()[2] + padding,
      vectorSource.getExtent()[3] + padding * 2,
    ]
    view.fit(extent, {
      size: map.getSize(),
    })

    map.on('click', function (evt) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature
      })
      setOpen(false)
      if (!feature) {
        return
      }
      setOpen(true)
    })
  }, [ref, mapRef, schools])

  return (
    <div
      ref={ref}
      id='map'
      className='h-[550px] overflow-hidden rounded-none lg:flex-grow'
    ></div>
  )
}
