import { db } from './data.js';

class MockDatabase {

  /* Mock a stateful in memory db */
  data;

  constructor() {
    this.data = db;
  }

  async getGames() {
    return this.data;
  }

  async write() {
    try {
      const dbSnapshot = structuredClone(this.data);
    } catch (err) {
      throw new Error('MockDatabase unable to write to')
    }
  }
}

export { MockDatabase };