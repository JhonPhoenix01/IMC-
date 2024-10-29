import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function TextButton (props){
    function onButtonTapped(){
        props.onPress();
    }
    
    return(
        <View>
            <Pressable onPress={onButtonTapped}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>{props.title}</Text>
                    </View>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        borderColor:'red',
        borderWidth:2,
        padding:8,
        borderRadius:5,
        backgroundColor:'blue',
      },
      textButton:{
        color:'white',
        fontSize:18
    }
});