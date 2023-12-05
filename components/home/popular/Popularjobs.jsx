import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import popularjobsStyles from './popularjobs.style';
import { COLORS, FONT, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch
  ('search', {
    query: 'react developer',
    num_pages: 1,
  });
  console.log(data,"data1");

  return (
    <View style={popularjobsStyles.container}>
      <View style={popularjobsStyles.header}>
        <Text style={popularjobsStyles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={popularjobsStyles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={popularjobsStyles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1,2,3,]}
            renderItem={({ item }) => {
              return <PopularJobCard item={item} />;
            }}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ paddingHorizontal: SIZES.medium }} 
            horizontal
            showsHorizontalScrollIndicator={false}
          />
  
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
