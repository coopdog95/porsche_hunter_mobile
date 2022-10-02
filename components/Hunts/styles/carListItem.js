import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
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
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  imageWrapper: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 5,
  },
  image: {
    height: '100%',
    width: '100%',
  },
})

export default styles
