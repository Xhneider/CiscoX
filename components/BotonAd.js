import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, Text, View, StyleSheet} from 'react-native';
import {InterstitialAd, AdEventType} from 'react-native-google-mobile-ads';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function BotonAd() {
  const [loaded, setLoaded] = useState(false);
  const [interstitial, setInterstitial] = useState(null);
  const [Gracias, setGracias] = useState(false);

  useEffect(() => {
    // cambiar a hacer el apk
    const interstitialAd = InterstitialAd.createForAdRequest(
      'ca-app-pub-3940256099942544/1033173712',
    );

    const loadInterstitial = async () => {
      try {
        await interstitialAd.load();
        setLoaded(true);
      } catch (error) {
        console.error('Error al cargar anuncio', error);
        setLoaded(false);
      }
    };

    interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
      // El anuncio se ha cerrado, por lo que podemos cargarlo nuevamente.
      loadInterstitial();
      setGracias(true);
    });
    loadInterstitial();

    setInterstitial(interstitialAd);
  }, []);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          if (interstitial) {
            interstitial.show();
          }
        }}>
        <View style={style.btonAd}>
        <Icon name={'coffee'} size={20} />
          <Text style={{fontFamily:'MPLUSRounded1c-Black',paddingLeft:10}}>Invitame A Un Café</Text>
        </View>
      </TouchableWithoutFeedback>

      {Gracias ? (
        <View>
          <Text>Muchas Gracias</Text>
        </View>
      ) : (
        <View>
        </View>
      )}
    </>
  );
}

const style=StyleSheet.create({
  btonAd:{
    height:40,
    width:200,
    backgroundColor:'#2271b3',
    borderRadius:7,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginBottom:10
  }
})