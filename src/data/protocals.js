// import {v4 as uuidV4} from 'uuid';

// class User {
//
//   id;
//   name;
//
//   constructor(name, id = null)
//   {
//     this.name = name;
//     this.id = id ? id : uuidV4();
//   }
//
// }
//
// class Event {
//   name;
//   payload;
//
//   constructor(name, payload)
//   {
//     this.name = name;
//     this.payload = payload;
//   }
// }
//
// const EVENT_ACK = 'system.ack';
//

class Message
{
  // 消息唯一ID
  id = '';
  // 是否是输入消息
  isInput = true;
  // 创建者名称
  creator = '';
  // 会话ID
  sessionId = '';
  // 消息创建时间
  createdAt = 0;
  // 消息体.
  message;

  constructor(data)
  {
    this.id = data.id;
    this.message = message;
    this.isInput = data.isInput;
    this.creator = data.creator;
    this.createdAt = data.createdAt;
    this.sessionId = data.sessionId;
    this.message = new MessageData(data.message);
  }

}

const MESSAGE_TYPE_TEXT = 'text';
const MESSAGE_TYPE_VIDEIO = 'video';

class MessageData
{
  type = ''; // text,
  data = {};

  constructor(message)
  {
    Object.assign(this, message);
  }
}


export class Chat
{
  // 对话的场景, 决定机器人响应的对象.
  scene = '';
  // 对话指定的 SessionId. 如果不指定, 服务端应该生成一个.
  sessionId = '';
  // 会话的标题
  title = '';
  // 会话的图标, 没有的话应该用默认的.
  icon = '';
  // 会话的简介. 鼠标悬停的时候应该呈现.
  desc = '';
  // 是否有未读的新消息.
  hasNew = true;
  // 最后的一条消息.
  lastMessage = '';
  // 最后的响应时间.
  receivedAt = '';

  constructor(data)
  {
    Object.assign(this, data);
  }
}
