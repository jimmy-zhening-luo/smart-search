import RequestAdapter from "../request/RequestAdapter.js";

export default class NullRequestAdapter extends RequestAdapter<null> {
  readonly payload: null;

  constructor() {
    try {
      super();
      this.payload = null;
    }
    catch (e) {
      throw new SyntaxError(
        `NullRequestAdapter: ctor: Failed to build null (empty) request payload from void inputs`,
        { cause: e },
      );
    }
  }
}
