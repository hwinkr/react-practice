import React from 'react';

interface MessageProps {
  name: string;
}

const Message = ({ name }: MessageProps) => {
  return <div>Message {name}</div>;
};

export default Message;
