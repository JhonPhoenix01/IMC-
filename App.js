import {useState} from 'react';
import { Button, StyleSheet, TextInput, Text, View, Pressable} from 'react-native';
import TextButton from './components/TextButton';
 
export default function App() {
 
  const [peso, setPeso] = useState(0);
  const [estatura, setEstatura] = useState(0);
  const [imc, setimc ] = useState(null);
  const [estadoNutricional, setEstadoNutricional] = useState(null);
 
  function PesoInputHadller (enteredText){
    setPeso(enteredText);
  }
  function EstaturaInputHadler (enteredText){
    setEstatura(enteredText);
  }
 
  function IndicedeMasaCorporal (peso, estatura){
    return peso / (estatura * estatura);
  }
 
  function DeterminaEstadoNutricional (imc){
    if (imc < 18.5){
      return "Peso Bajo";
    }
    if (imc < 25.0){
      return "Peso Normal";
    }
    if (imc < 30.0){
      return "Sobrepeso";
    }
    if (imc < 40.0){
      return "Obesidad";
    }
    return "Obesidad";
  }
 
  function onCalcularButtonTapped(){
    const bmi = IndicedeMasaCorporal(peso, estatura);
    setimc(bmi.toFixed(4));
    setEstadoNutricional(DeterminaEstadoNutricional(bmi));
  }
 
  function onLimpiartButtonTapped(){
    setPeso(0);
    setEstatura(0);
    setimc(null);
    setEstadoNutricional(null);
  }
 
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
            <TextInput placeholder='Peso de la persona en kilogramos' style={styles.textInput}
            onChangeText={PesoInputHadller}/>
            <TextInput placeholder='Estatura de la persona en metros' style={styles.textInput}
            onChangeText={EstaturaInputHadler}/>
      </View>
 
      <View style={styles.comandsContainer}>
            {/* <Button title='Calcular' color={'green'} onPress={onCalcularButtonTagged}/>
            <Button title='Limpiar' color={'red'} onPress={onLimpiartButtonTagged}/> */}

            <TextButton title='Calcular' onPress={onCalcularButtonTapped}/> 
            <TextButton title='Limpiar' onPress={onLimpiartButtonTapped}/> 

            {/*<View>
              <TextButton/>
                 <Pressable onPress={onCalcularButtonTagged}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Calcular</Text>
                    </View>
                </Pressable> 
            </View>
            <View>
                <Pressable onPress={onLimpiartButtonTagged}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Limpiar</Text>
                    </View>
                </Pressable>
            </View>*/}

        </View>
 
        <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>El IMC de la persona es:</Text>
            <Text style={styles.results}>{imc}</Text>
            <Text style={styles.resultText}>El estado nutricional de la persona es:</Text>
            <Text style={styles.results}>{estadoNutricional}</Text>
        </View>
    </View>
);}
 
const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: 'black',
    flexDirection: 'column',
    // gap: 50,
    alignItems: 'fill',
    justifyContent: 'top',
  },
  inputContainer: {
    flex: 0,
    borderColor: 'white',
    borderWidth: 2.5,
    padding: 8,
  },
  comandsContainer: {
    flex: 0,
    // borderColor: 'lightgray',
    // borderWidth: 3,
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'center',
    gap: 48,
  },
  resultsContainer: {
    flex: 0,
    borderColor: 'lightgray',
    borderWidth: 3,
    padding: 8,
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 2.5,
    padding:5,
    margin: 4,
    fontSize: 18,
    backgroundColor:'white'
  },
  resultText: {
    fontSize: 20,
    color:'white'
  },
  results: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color:'white'
  },
  // button:{
  //   borderColor:'green',
  //   borderWidth:2,
  //   padding:8,
  //   borderRadius:5,
  //   backgroundColor:'green',
  // },
  // textButton:{
  //   color:'white',
  //   fontSize:18
  // }
});