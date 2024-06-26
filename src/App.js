import { Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import {FaSun, FaMoon} from 'react-icons/fa'
import {useState, useEffect} from 'react'

function App() {
    const initialTodos = [
      {
        id: 1,
        body: "read books",
      },
      {
        id: 2,
        body: "mind my business",
      },
    ];
  
  const [todos, setTodos] = useState(
   () => JSON.parse(localStorage.getItem('todos')) || []
    );
  useEffect (() =>{
localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  function deleteTodo(id) {
  const newTodos = todos.filter(todo => {
      return todo.id !== id
  })
  setTodos(newTodos)
  }

  function addTodo (todo){
    setTodos([...todos, todo])
  }

  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <VStack p={8}>
      <IconButton 
      icon={colorMode === 'light' ? <FaSun/> : <FaMoon/>} 
      isRound='true' 
      size='lg'
      alignSelf='flex-end'
      onClick={toggleColorMode}
      />
      <Heading 
  mb='4' 
  fontWeight='extrabold' 
  size={colorMode === 'light' ? '3xl' : '3xl'} 
  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
  bgClip="text"
      >
        Todo Application 
        </Heading>;
        <TodoList todos= {todos} deleteTodo ={deleteTodo}/>
        <AddTodo addTodo={addTodo}/>
    </VStack>
  );
}




export default App;
