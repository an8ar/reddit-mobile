import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { ListItem } from '@rneui/themed';

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
    >
      <ListItem bottomDivider>
        <ListItem.Content className="flex-row items-center justify-start gap-2 p-2">
          <AntDesign name="plus" size={20} color="black" />
          <ListItem.Title className="text-sm">Create a community</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ListItem.Accordion>
  );
};
