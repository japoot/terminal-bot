const SYSTEM_RESPONSES = {
  ls: {
    result: ['Desktop', 'Downloads', 'hello.txt'],
    status: 0,
  },
  pwd: {
    result: ['/Users/japoot'],
    status: 0,
  },

  'mkdir chat': {
    result: [''],
    status: 0,
  },

  'mkdir Downloads': {
    result: ['Directoy already exists.'],
    status: 1,
  },
};

export default SYSTEM_RESPONSES;
