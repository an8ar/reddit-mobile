import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

type VoteState = 'upVoted' | 'downVoted' | 'notVoted';

enum VoteColor {
  upVoted = '#ff8800',
  downVoted = '#7011e4',
  notVoted = '#000000',
}

export const PostVote = () => {
  const [voteState, setVoteState] = useState<VoteState>('notVoted');

  const handleUpVote = () => {
    if (voteState === 'upVoted') {
      setVoteState('notVoted');
    } else {
      setVoteState('upVoted');
    }
  };
  const handleDownVote = () => {
    if (voteState === 'downVoted') {
      setVoteState('notVoted');
    } else {
      setVoteState('downVoted');
    }
  };

  return (
    <View className="flex-row items-center space-x-2 rounded-full border-[0.5px] border-gray-300 px-3 py-[2px]">
      <TouchableOpacity onPress={handleUpVote} className="py-1">
        {voteState === 'upVoted' ? (
          <Image
            source={require('.././../../../assets/images/arrow-down-filled.png')}
            className="h-4 w-4 rotate-180"
            style={{ tintColor: '#ff8800' }}
          />
        ) : (
          <Image
            source={require('.././../../../assets/images/arrow-down.png')}
            className="h-4 w-4 rotate-180"
          />
        )}
      </TouchableOpacity>

      <Text style={{ color: VoteColor[voteState] }}>123k</Text>

      <View className="mx-1 h-[60%] w-[0.8px] bg-gray-300" />

      <TouchableOpacity onPress={handleDownVote} className="py-1">
        {voteState === 'downVoted' ? (
          <Image
            source={require('.././../../../assets/images/arrow-down-filled.png')}
            className="h-4 w-4 fill-purple-500"
            style={{ tintColor: '#7011e4' }}
          />
        ) : (
          <Image
            source={require('.././../../../assets/images/arrow-down.png')}
            className="h-4 w-4"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
