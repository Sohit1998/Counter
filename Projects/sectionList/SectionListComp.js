import {View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';



const Item = ({title}) => (
  <View style={styles.nameCont}>
    <Text style={styles.nameText}>{title}</Text>
  </View>
);

const SectionListComp = () => {
  const structuredData = [];
  data.forEach(element => {
    if (structuredData.length) {
      var categoryMatched = false;

      structuredData.forEach(item => {
        if (item.categoryId === element.categoryId) {
          item.data.push(element.title);
          categoryMatched = true;
        }
      });

      if (!categoryMatched) {
        let newCategory = {
          categoryId: element.categoryId,
          data: [element.title],
        };
        structuredData.push(newCategory);
      }
    } else {
      let obj = {categoryId: element.categoryId, data: [element.title]};
      structuredData.push(obj);
    }
  });

  return (
    <SafeAreaView>
      <SectionList
        sections={structuredData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section}) => (
          <Text style={styles.category}>{section.categoryId}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  category: {
    fontWeight: '800',
    padding: 18,
    textAlign: 'center',
    backgroundColor: 'pink',
    margin: 20,
    fontSize: 30,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
  },
  nameCont: {
    backgroundColor: 'green',
    padding: 14,
    margin: 20,
    marginVertical: 8,
  },
  nameText: {
    fontSize: 24,
    textTransform: 'capitalize',
    color: 'white',
  },
});

export default SectionListComp;

const data = [
  {
    categoryId: 'fruits',
    title: 'mango',
    quantity: 2,
  },
  {
    categoryId: 'fruits',
    title: 'apple',
    quantity: 5,
  },
  {
    categoryId: 'fruits',
    title: 'coconut',
    quantity: 4,
  },
  {
    categoryId: 'fruits',
    title: 'orange',
    quantity: 2,
  },
  {
    categoryId: 'fruits',
    title: 'pomegranade',
    quantity: 2,
  },
  {
    categoryId: 'fruits',
    title: 'mausmi',
    quantity: 3,
  },
  {
    categoryId: 'flowers',
    title: 'rose',
    quantity: 1,
  },
  {
    categoryId: 'flowers',
    title: 'lili',
    quantity: 4,
  },
  {
    categoryId: 'flowers',
    title: 'jasmine',
    quantity: 2,
  },
  {
    categoryId: 'flowers',
    title: 'hibiscus',
    quantity: 8,
  },
  {
    categoryId: 'flowers',
    title: 'daffodils',
    quantity: 9,
  },
  {
    categoryId: 'flowers',
    title: 'seasonal flowers',
    quantity: 1,
  },
  {
    categoryId: 'flowers',
    title: 'sregional fruits',
    quantity: 1,
  },
  {
    categoryId: 'vegetables',
    title: 'potato',
    quantity: 8,
  },
  {
    categoryId: 'vegetables',
    title: 'tomato',
    quantity: 5,
  },
  {
    categoryId: 'vegetables',
    title: 'guard',
    quantity: 2,
  },
  {
    categoryId: 'vegetables',
    title: 'brinjal',
    quantity: 6,
  },
];