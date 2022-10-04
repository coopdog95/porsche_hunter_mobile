import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  huntsContainer: {
    display: 'flex',
    height: '100%',
    flex: 1,
  },
  createHuntButton: {
    backgroundColor: '#007AFF',
    marginHorizontal: 15,
    marginTop: 5,
    borderRadius: 8,
  },
  emptyHunts: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  emptyHuntsText: {
    fontSize: 20,
    flex: 1,
  },
})

export default styles
