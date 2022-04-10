export interface systemReponses {
  ls: systemReponsesCmd;
  pwd: systemReponsesCmd;
  "mkdir chat": systemReponsesCmd;
  "mkdir Downloads": systemReponsesCmd;
}
export interface systemReponsesCmd {
  result: Array<string>;
  statu: number;
}

const SYSTEM_RESPONSES = {
  ls: {
    result: ["Desktop", "Downloads", "hello.txt"],
    status: 0,
  },
  pwd: {
    result: ["/Users/japoot"],
    status: 0,
  },

  "mkdir chat": {
    result: [""],
    status: 0,
  },

  "mkdir Downloads": {
    result: ["Directoy already exists."],
    status: 1,
  },
};

export default SYSTEM_RESPONSES;
