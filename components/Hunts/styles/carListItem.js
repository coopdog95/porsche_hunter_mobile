import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,
  },
  carTitle: {
    flex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    bottom: 7,
    color: 'white',
    paddingLeft: 10,
  },
  modalCarTitle: {
    backgroundColor: 'white',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    paddingLeft: 5,
    paddingTop: 5,
    borderRadius: 8,
  },
  modelName: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  trimName: {
    fontSize: 22,
    fontStyle: 'italic',
    color: 'white',
  },
  imageWrapper: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  modalImageContainer: {
    height: 500,
    flex: 1,
  },
  modalImage: {
    height: '100%',
    width: '100%',
  },
})

export default styles
