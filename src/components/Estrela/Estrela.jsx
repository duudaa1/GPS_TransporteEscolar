import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Estrela = ({ favoritado, onPress }) => {
  const [estadoFavoritado, setEstadoFavoritado] = useState(favoritado);

  const toggleFavorito = () => {
    setEstadoFavoritado(!estadoFavoritado);
    onPress(!estadoFavoritado); // Passa o novo estado como argumento para a função onPress
  };

  return (
    <TouchableOpacity onPress={toggleFavorito}>
      <View style={{ padding: 10 }}>
        <Icon name={estadoFavoritado ? 'star' : 'star-o'} size={34} color={estadoFavoritado ? 'gold' : 'gray'} />
      </View>
    </TouchableOpacity>
  );
};

export default Estrela;