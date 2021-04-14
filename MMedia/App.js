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

  function limpa(){
    setN1('');
    setN2('');
    setN3('');
    setN4('');
    setTotal(0);   
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Minha Média</Text>

      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Primeira Nota' keyboardAppearance='dark'
      value={n1} onChangeText={(int)=> setN1(int)}
      />
      
      <TextInput style={styles.input} maxLength={4} keyboardType='number-pad' placeholder='Segunda Nota'      
      value={n2} onChangeText={(int)=> setN2(int)}
      />
      <TextInput style={styles.input} maxLength={4} keyboardType='number-pad' placeholder='Terceira Nota'
      value={n3} onChangeText={(int)=> setN3(int)}
      />
      
      <TextInput style={styles.input} maxLength={4} keyboardType='number-pad' placeholder='Quarta Nota'
      value={n4} onChangeText={(int)=> setN4(int)}
      />

      <TouchableOpacity style={styles.btn} activeOpacity={0.7}  onPress={cal}    
      >
        <Text  style={styles.btnText} >Calcular Média</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={limpa} activeOpacity={0.7}>
        <Text style={styles.btnText}>Limpar Campos</Text>
      </TouchableOpacity>

      <Text style={styles.resul} >SUA NOTA É {total.toFixed(1)} </Text>
      <Text style={styles.resul} >SUA MÉDIA É {div.toFixed(1)} </Text>


      <Text style={styles.obs} >EM CASO DE DÉCIMOS COLOCAR A VIRGULA!</Text>

      

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
    width:250,
    height:40,
    color: '#ffff',
    borderBottomColor:'#fff'
  },
  btn:{
    borderRadius:5,
    backgroundColor:'#E64A19',
    width:250,
    height:40,
    marginTop:10,
    justifyContent:'center'
  },
  btnText:{
    color: '#ffff',
    fontSize:18,
    textAlign:'center',    
  },
  resul:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
    color:'#fff'
  },
  obs:{
    color:'#fff',
    marginTop: 50,
    fontWeight:'bold',
    fontSize: 12
  }


});
