import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {
  InterstitialAd,
  AdEventType,
} from 'react-native-google-mobile-ads';

export default function BotonAd() {
  const [loaded, setLoaded] = useState(false);
  const [interstitial, setInterstitial] = useState(null);
  const [Gracias, setGracias] = useState(false);

  useEffect(() => {
    // cambiar a hacer el apk
    const interstitialAd = InterstitialAd.createForAdRequest('ca-app-pub-3940256099942544/1033173712');

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
      {loaded ? (
        <Button
          title="Invitame a un cafe"
          onPress={() => {
            if (interstitial) {
              interstitial.show();
            }
          }}
        />
      ) : (
        <View>
          <Text>Cargando anuncio</Text>
        </View>
      )}

      {Gracias ? (
        <View>
          <Text>Muchas Gracias</Text>
        </View>
      ) : (
        <View>
          <Text></Text>
        </View>
      )}
    </>
  );
}
