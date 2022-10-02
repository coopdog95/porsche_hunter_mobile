import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputs: {
    marginVertical: 10,
  },
  textArea: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 24,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginLeft: 10,
    paddingTop: 2,
    paddingLeft: 7,
    paddingRight: 3,
    fontSize: 16,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  carsHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCarButton: {
    backgroundColor: '#007AFF',
    height: 30,
    width: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  addCarText: {
    color: 'white',
    fontSize: 22,
  },
})

export default styles
