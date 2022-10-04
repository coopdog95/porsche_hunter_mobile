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
    // height: 100,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
  },
  carListItemDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 3,
  },
  carListItemText: {
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
  carListItemDeleteButton: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 7,
    marginTop: 5,
  },
  carsContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  deleteHuntButton: {
    backgroundColor: 'red',
    borderRadius: 8,
  },
})

export default styles
