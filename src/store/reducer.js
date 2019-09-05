import * as actions from "./actions";
import { copy } from "./utility";
const initialState = {
  conversations: [
    { id: "1", users: ["0", "1"] },
    { id: "2", users: ["0", "2"] },
    { id: "3", users: ["0", "3"] },
    { id: "4", users: ["0", "4"] },
    { id: "5", users: ["0", "5"] }
  ],
  messages: [
    {
      id: "1",
      content: [
        {
          id: "1",
          content: "Hello!",
          date: "Sat Aug 24 2019 14:24:54",
          userId: "0"
        },
        {
          id: "2",
          content: "What's up!",
          date: "Sat Aug 24 2019 14:24:56",
          userId: "1"
        },
        {
          id: "3",
          content:
            "I'm here in house please come to me it would be nice midnight ;)",
          date: "Sat Aug 24 2019 14:24:56",
          userId: "0"
        },
        {
          id: "4",
          content: "xd!",
          date: "Sat Aug 24 2019 14:24:54",
          userId: "1"
        },
        {
          id: "5",
          content: "das!",
          date: "Sat Aug 24 2019 14:24:56",
          userId: "0"
        },
        {
          id: "6",
          content: "hye ;)",
          date: "Sat Aug 24 2019 14:24:58",
          userId: "0"
        },
        {
          id: "7",
          content:
            "I'm here in house please come to me it would be nice midnight ;)",
          date: "Sat Aug 24 2019 14:24:56",
          userId: "0"
        },
        {
          id: "8",
          content: "xd!",
          date: "Sat Aug 24 2019 14:24:54",
          userId: "1"
        },
        {
          id: "9",
          content: "das!",
          date: "Sat Aug 24 2019 14:24:56",
          userId: "0"
        },
        {
          id: "10",
          content: "hye ;)",
          date: "Sat Aug 24 2019 14:24:58",
          userId: "1"
        }
      ]
    },
    {
      id: "2",
      content: [
        {
          id: "1",
          content: "Where are you?",
          date: "Sat Aug 24 2019 14:24:54",
          userId: "2"
        },
        {
          id: "2",
          content: "At home, why?",
          date: "Sat Aug 24 2019 14:29:12",
          userId: "0"
        }
      ]
    },
    {
      id: "3",
      content: []
    },
    {
      id: "4",
      content: []
    },
    {
      id: "5",
      content: []
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MESSAGESUBMIT:
      const newState = { ...state };
      newState.messages = copy(state.messages);
      newState.messages.map(msg => {
        if (msg.id === action.user.id) {
          return msg.content.push({
            id: (msg.content.length + 1).toString(),
            content: action.value,
            date: new Date().toString(),
            userId: "0"
          });
        } else {
          return state;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default reducer;
