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
  editCarContainer: {
    zIndex: 1,
  },
  carListItem: {
    height: 75,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  carListItemDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 3,
  },
  carListItemModel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  carListItemTrim: {
    fontSize: 18,
    fontWeight: '400',
  },
  carListItemImage: {
    backgroundColor: 'red',
    height: 70,
    width: 70,
  },
})

export default styles
