'use client';
import Header from '@/components/Header/Header';
import {
  ChannelList,
  ChannelListItem,
} from '@/components/ChannelList/ChannelList';
import { useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [hide, setHide] = useState(true);
  return (
    <Header hidable={true} hide={hide} onHide={() => setHide(!hide)}>
      <ChannelList hide={hide}>
        <ChannelListItem target={params.id} watch={true} />
      </ChannelList>
    </Header>
  );
}
