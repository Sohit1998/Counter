import {StyleSheet} from 'react-native';
//movie

const style = StyleSheet.create({
  imageCont: {
    border: 0,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(243,244,249)',
  },
  img: {
    border: 0,
    borderRadius: 20,
    width: 290,
    height: 400,
    marginBottom: 30,
    // resizeMode: 'contain'
  },
  info: {
    textAlign: 'center',
  },
  name: {
    width: 290,
    fontSize: 16,
    textAlign: 'center',
    color: 'rgb(101,103,107)',
  },
  part: {
    marginTop: 15,
    textAlign: 'center',
    color: 'rgb(135,139,147)',
  },
  genre: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
    // backgroundColor: 'white'
  },
  genreText: {
    marginTop: 15,
    border: 0,
    padding: 9,
    margin: 8,
    borderRadius: 15,
    color: 'white',
    fontWeight: '600',
    fontSize: 10,
    // borderWidth: 1,
    backgroundColor: 'rgb(59,107,246)',
    overflow: 'hidden',
  },
});

export default style;
