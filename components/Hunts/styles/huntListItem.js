import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 220,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  carImages: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    overflow: 'hidden',
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  username: {
    fontWeight: 'bold',
    color: '#444444',
  },
})

export default styles
