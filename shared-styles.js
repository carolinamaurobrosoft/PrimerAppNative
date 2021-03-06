import { StyleSheet } from 'react-native';

//defino los estilos que pueden ser importados a todos los componentes

export default StyleSheet.create ({
    runInfoWrapper: {
        backgroundColor: 'rgba(255,255,255,0.75)',
        paddingVertical: 15
    },
    runInfoTitle: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#666'
    },
    runInfoValue: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '200',
        paddingVertical: 5
    }
});

