import React, { useState } from 'react';

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { ListItem } from '@rneui/themed';
import { Text } from 'react-native';

export const CommunitiesAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ListItem.Accordion
      content={
        <>
          <ListItem.Content>
            <ListItem.Title className="font-semibold">Your Communities</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
      className="space-y-2"
    >
      <ListItem>
        <ListItem.Content className="flex-row items-center justify-start gap-2">
          <AntDesign name="plus" size={20} color="black" />
          <ListItem.Title className="text-sm">Create a community</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content className="flex-row items-center justify-start gap-2">
          <FontAwesome name="reddit" size={20} color="#ea580c" />
          <ListItem.Title className="text-sm">r/announcements</ListItem.Title>
          <Text className="flex-1 text-right">
            <AntDesign name="staro" size={20} color="black" />
          </Text>
        </ListItem.Content>
      </ListItem>
    </ListItem.Accordion>
  );
};
