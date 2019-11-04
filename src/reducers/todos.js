const initSate = [
  {
    id: 0,
    text: "What's your name. I'm Aris",
    remained: 3,
    completed: false
  },
  {
    id: 1,
    text: "How are you? I'm great",
    remained: 20,
    completed: false
  },
  {
    id: 2,
    text: "Who do you love? I love my mom",
    remained: 20,
    completed: false
  },
  {
    id: 3,
    text: "Do you have a pet? Yes. I have a dog",
    remained: 20,
    completed: false
  },
  {
    id: 4,
    text: "Can birds fly? Yes they can fly",
    remained: 20,
    completed: false
  },
  {
    id: 5,
    text: "Do you like cake? Yes, I like cake",
    remained: 20,
    completed: false
  },
  {
    id: 6,
    text: "Is your mom pretty? Yes, she is pretty",
    remained: 20,
    completed: false
  },
  {
    id: 7,
    text: "What color is it? It's black",
    remained: 20,
    completed: false
  },
  {
    id: 8,
    text: "What color are they? They are blue",
    remained: 20,
    completed: false
  },
  {
    id: 9,
    text: "Do you want an apple? Yes, I want an apple",
    remained: 20,
    completed: false
  },
  {
    id: 10,
    text: "Do you want a sticker? Yes, I want a sticker",
    remained: 20,
    completed: false
  }
];

const todos = (state = initSate, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
