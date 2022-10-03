import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  modelSelector: {
    marginVertical: 10,
    zIndex: 3,
  },
  trimSelector: {
    marginVertical: 10,
    zIndex: 2,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 10,
    backgroundColor: 'grey',
  },
})

export default styles
