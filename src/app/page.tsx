'use client';
import Header from '@/components/Header/Header';
import {
  ChannelList,
  ChannelListItem,
} from '@/components/ChannelList/ChannelList';
import { useEffect, useState } from 'react';
import { Stream } from '@/types/api';

export default function Home() {
  const [data, setData] = useState<Stream[]>([]);

  useEffect(() => {
    fetch('/api/get-streams')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Header>
      <ChannelList>
        {data.map((value, index) => (
          <ChannelListItem target={value.name} key={index} />
        ))}
      </ChannelList>
      <h1>okwtf</h1>
    </Header>
  );
}
