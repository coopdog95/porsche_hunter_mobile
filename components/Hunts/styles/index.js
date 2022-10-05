import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  scrollView: {
    padding: 10,
    flex: 1,
  },
  editButton: {
    backgroundColor: '#007AFF',
    marginTop: 2,
    marginBottom: 10,
    borderRadius: 10,
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    marginBottom: 10,
  },
  createdAt: {
    fontSize: 15,
    fontWeight: '300',
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    color: '#444444',
    marginLeft: 5,
  },
  locationSelector: {
    height: 300,
    flex: 1,
    marginBottom: 10,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
})

export default styles
