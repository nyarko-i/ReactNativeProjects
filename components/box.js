import { View, Text, StyleSheet} from 'react-native'

export default function box() {
    return(
        <View style={styles.box}>
            <Text style={styles.text}></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        padding: 20
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"

    }
})