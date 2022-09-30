import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  porscheIcon: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
  loginInputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },
  loginTextArea: {
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
  loginInput: {
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
  fullScreenSpinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
