import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#241b1c',
  },
  content: {
    flex: 1,
    padding: 12,
  },
  detailsContent: {
    padding: 20,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#241b1c',
  },
  logo: {
    fontFamily: 'serif',
    fontSize: 60,
    color: '#fffbea',
    textAlign: 'center',
    marginBottom: 30,
  },
  heading: {
    fontFamily: 'serif',
    fontSize: 25,
    color: '#fffbea',
    marginVertical: 12,
  },
  text: {
    fontSize: 16,
    color: '#fffbea',
    marginBottom: 12,
  },
  panel: {
    backgroundColor: '#403638',
    padding: 20,
    borderRadius: 25,
    marginVertical: 15,
  },
  input: {
    backgroundColor: '#403638',
    color: '#fffbea',
    borderWidth: 1,
    borderColor: '#fffbea',
    borderRadius: 20,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#403638',
    borderRadius: 25,
    padding: 15,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fffbea',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  photoCard: {
    flex: 1,
    maxWidth: '31.33%',
    margin: '1%',
    marginBottom: 15,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#fffbea',
    borderRadius: 12,
    backgroundColor: '#403638',
  },
  photoText: {
    color: '#fffbea',
    fontSize: 12,
    marginTop: 4,
  },
  largePhoto: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#fffbea',
    borderRadius: 15,
    backgroundColor: '#403638',
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomArea: {
    backgroundColor: '#302729',
  },
  bottomBar: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 35,
  },
  tab: {
    flex: 1,
    backgroundColor: '#fffbea',
    paddingVertical: 15,
    marginHorizontal: 4,
    borderRadius: 30,
  },
  activeTab: {
    backgroundColor: '#c7c4bb',
  },
  tabText: {
    color: '#241b1c',
    textAlign: 'center',
    fontSize: 16,
  },
});