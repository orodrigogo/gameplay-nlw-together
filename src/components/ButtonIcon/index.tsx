import React from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}