import {StyleSheet} from 'react-native';
const HeaderStyle = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    // borderTopWidth: .2,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    borderBottomWidth: .3,
    marginVertical: 15,
    // paddingVertical: 10
    paddingBottom: 15

  },
  headerLeftCont: {
    borderRadius: 10,
    width: '50%',
  },
  headerRightCont: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly'

  },

  img: {
    width: 20,
    height: 20,
    marginHorizontal: 2
  },

  verticalLine: {
    borderWidth: 1
  },

  sortCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },

  filterCont: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  sortFilterText: {
    marginHorizontal: 5
  }
});

export default HeaderStyle;
