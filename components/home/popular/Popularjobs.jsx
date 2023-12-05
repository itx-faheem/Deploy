import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import popularjobsStyles from './popularjobs.style';
import { COLORS, FONT, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
import { useNavigation } from "@react-navigation/native";  

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    const navigation = useNavigation();  
    navigation.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };



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
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;





