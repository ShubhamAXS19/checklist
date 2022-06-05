import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView } from 'react-native';
import Search from './components/Search';

export default function App() {
  const [enteredItem,setEnteredItem] = useState('');
  const [itemList ,setItemList] = useState([]);
  

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText)
}

  const addItemHandler =() =>{
    setItemList(currentGoals => [...itemList,enteredItem])
  }

  
  return (
    // adding items
    <View style={styles.screen}>
        <View style={styles.input1}>
          <TextInput placeholder='Enter Item to be Added' 
          style={styles.inputContainer1}
          onChangeText={itemInputHandler} 
          value={enteredItem}
          />

          <Button title='ADD' onPress={addItemHandler}/>
        </View>

      

      <ScrollView>
      <View>
          {itemList.map((goal) => (<View key={goal} style={styles.listItem}> 
          <Text > {goal} </Text> 
          </View>
            ))}
        </View>

            <Search item={itemList}/>
       
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },

  input1:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },


  inputContainer1 :{
    width:"80%" ,
    borderColor:"black" ,
    borderWidth:1,
    height:40,
    padding:10,
  },
  
   

  listItem :{
     padding:10,
     marginVertical:10,
     backgroundColor:'#ccc',
     borderColor:'black',
     borderWidth:1
  }
});
