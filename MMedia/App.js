import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,Alert, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function App() {

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const div = x / 4;

  useEffect(()=> {
    if(div >= 5){      
      Alert.alert('Parabéns, vocé foi Aprovado com média ' + div + " !" );
    }
  }, [div])

  function cal(){
    setTotal(Number(n1) + Number(n2) + Number(n3) + Number(n4));
    
     Keyboard.dismiss()   
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Minha Média</Text>

      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Primeira Nota'
      value={n1} onChangeText={(int)=> setN1(int)}
      />
      
      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Segunda Nota'      
      value={n2} onChangeText={(int)=> setN2(int)}
      />
      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Terceira Nota'
      value={n3} onChangeText={(int)=> setN3(int)}
      />
      
      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Quarta Nota'
      value={n4} onChangeText={(int)=> setN4(int)}
      />

      <TouchableOpacity style={styles.btn} activeOpacity={0.7}  onPress={cal}    
      >
        <Text  style={styles.btnText} >Calcular Média</Text>
      </TouchableOpacity>

      <Text style={styles.resul} >Sua nota é {total.toFixed(1)} </Text>
      <Text style={styles.resul} >Sua Média é {div.toFixed(1)} </Text>

      

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B4453',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'#E64A19',
    fontSize:45,
    padding:10,
    fontWeight:'bold'
  },
  input:{
    borderBottomWidth:2,
    textAlign:'center',
    marginTop:10,
    width:150,
    color: '#ffff',
    borderBottomColor:'#fff'
  },
  btn:{
    borderRadius:5,
    backgroundColor:'#E64A19',
    width:180,
    height:30,
    marginTop:10,
    justifyContent:'center'
  },
  btnText:{
    color:'#fff',
    textAlign:'center',    
  },
  resul:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:10,
    color:'#fff'
  }


});
