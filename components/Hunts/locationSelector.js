import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import styles from './styles'

// const SAN_FRANCISCO = {
//   latitude: 137.78825,
//   longitude: -22.4324,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421,
// }

const LocationSelector = ({
  editable = true,
  location: { latitude, longitude },
  setLocation,
}) => {
  const [region, setRegion] = useState({
    latitude,
    longitude,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
  })
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: null,
    longitude: null,
  })
  const mapRef = useRef()

  useEffect(() => {
    setInitialRegion()
  }, [latitude, longitude])

  const setInitialRegion = async () => {
    if (latitude && longitude) {
      setRegion({
        ...region,
        latitude,
        longitude,
      })
      animateMap(latitude, longitude)
      setMarkerCoordinates({
        latitude,
        longitude,
      })
    } else {
      await initializeMapToUserLocation()
    }
  }

  const animateMap = (lat, lng) =>
    mapRef.current?.animateToRegion(
      {
        ...region,
        latitude: lat,
        longitude: lng,
      },
      1000,
    )

  const initializeMapToUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status === 'granted') {
      let {
        coords: { latitude: myLat, longitude: myLng },
      } = await Location.getCurrentPositionAsync({})
      setRegion({
        ...region,
        latitude: myLat,
        longitude: myLng,
      })
    }
  }

  const onPressMap = ({ nativeEvent: { coordinate } }) => {
    if (!editable) return
    setLocation(coordinate)
    animateMap(coordinate.latitude, coordinate.longitude)
  }

  const showMarker = markerCoordinates.latitude && markerCoordinates.longitude

  return (
    <View style={styles.locationSelector}>
      {region.latitude && (
        <MapView
          ref={mapRef}
          region={region}
          onPress={onPressMap}
          onRegionChange={setRegion}
          moveOnMarkerPress
          showsUserLocation
          showsMyLocationButton
          loadingEnabled
          style={styles.map}
        >
          {showMarker && <Marker coordinate={markerCoordinates} />}
        </MapView>
      )}
    </View>
  )
}

export default LocationSelector
