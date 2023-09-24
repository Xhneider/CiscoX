import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BotonAd() {
  const [interstitial, setInterstitial] = useState(null);

  useEffect(() => {
    const interstitialAd = InterstitialAd.createForAdRequest(
      'ca-app-pub-3940256099942544/1033173712', // Reemplaza con tu ID de anuncio
    );

    const loadInterstitial = async () => {
      try {
        await interstitialAd.load();
      } catch (error) {
        // ERROR AL CARGAR EL ANUNCIO
        console.log('Error al cargar anuncio');
      }
    };

    interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
      loadInterstitial();
      setGracias(true);
    });

    loadInterstitial();
    setInterstitial(interstitialAd);
  }, []);

  //Funcion para el evento del boton
  const showInterstitial = async () => {
    try {
      if (interstitial) {
        await interstitial.show();
      } else {
        console.error('El anuncio no se ha cargado correctamente.');
      }
    } catch (error) {
      //ERROR AL CARGAR EL ANUNCIO
      console.log('Error al mostrar anuncio');
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={showInterstitial}>
        <View style={style.btonAd}>
          <Icon name={'coffee'} size={20} />
          <Text style={{ fontFamily: 'MPLUSRounded1c-Black', paddingLeft: 10 }}>
            Invítame A Un Café
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const style = StyleSheet.create({
  btonAd: {
    height: 40,
    width: 200,
    backgroundColor: '#2271b3',
    borderRadius: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
});