
/**
 * @property {MessageBatch} lastBatch
 * @property {string} lastMessage
 */
export default class ChatInfo {

  /**
   * sessionId 的设置值.
   * @type {string}
   */
  session;

  /**
   * 对话场景
   * @type {string}
   */
  scene;

  /**
   * 是否有新消息.
   * @type {boolean}
   */
  hasNew = false;

  /**
   * 当前的消息
   * @type {Object}
   */
  batches = {};

  /**
   * @type {boolean}
   */
  isSaid = false;

  /**
   * Chat 自身是否在等待回复.
   * @type {boolean}
   */
  loading = false;

  bot=true;

  /**
   * @type {Context}
   */
  context;

  suggestions = {};

  constructor(
    {
      scene,
      session,
      bot
    }
  ) {
    this.session = session;
    this.scene = scene;
    this.bot = !!bot;
  }

  /**
   * 最后一条消息的简述.
   * @returns {string}
   */
  get lastMessage() {
    let batch = this.lastBatch;
    return batch ? batch.lastMessage : '';
  }

  /**
   * @returns {MessageBatch}
   */
  get lastBatch() {
    if (this.batches.length > 0) {
      return this.batches[this.batches.length - 1];
    }
    return null;
  }
}
