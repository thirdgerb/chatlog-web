import {Message} from "./Message";

export default class Input {

  session;
  scene;
  bot;
  message;

  constructor({session, scene, bot}, message) {
    if (!(message instanceof Message)) {
      throw new Error('message is not instance of Message:' + message);
    }
    this.message = message;
    this.session = session;
    this.scene = scene;
    this.bot = bot;
  }
}