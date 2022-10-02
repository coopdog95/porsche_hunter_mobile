import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
    flex: 1,
  },
  editButton: {
    // height: 50,
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
  },
  createdAt: {
    fontSize: 15,
    fontWeight: '300',
  },
})

export default styles
