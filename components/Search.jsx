import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView } from 'react-native';



const Search = ({itemList}) => {
  const searchHandler  = (query) => {
    setQuery(query);
  }
  const [query,setQuery] = useState('');
  return (
    <View>
        {/* Searching itmes */}
        <View style={styles.input2}>
          <TextInput placeholder='Search' 
          style={styles.inputContainer2}
          onChangeText={searchHandler} 
          value={query}
          />

          <Button title='Search' onPress={searchHandler}/>
        </View>

        <ScrollView>
        <View>
        { itemList.filter((item)=>item.toLowerCase()
        .includes(enteredItem)).map((item) => 
        (<Text>{item}</Text>)) }
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
      padding:50
    },
    input2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    
      },
      inputContainer2 :{
        width:"70%",
        height:40,
        padding:10,
        marginTop:10,
        borderColor:"black" ,
        borderWidth:1,
      },
    
      listItem :{
         padding:10,
         marginVertical:10,
         backgroundColor:'#ccc',
         borderColor:'black',
         borderWidth:1,
      },
    });


export default Search;
