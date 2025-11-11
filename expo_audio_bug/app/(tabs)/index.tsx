import { useEffect } from 'react';
import {
  useAudioPlayer,
  useAudioSampleListener
} from 'expo-audio';

export default function HomeScreen() {
  const player = useAudioPlayer(require('../../assets/guitar.mp3'));
  console.log('loaded home');

  useAudioSampleListener(player, (samples) => {
    console.log('samples', samples);
  });

  useEffect(() => {
    console.log('playing audio');
    player.play();
  }, []);

  return null;
}
