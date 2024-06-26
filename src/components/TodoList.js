import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({todos, deleteTodo}) {

if (!todos.length){
    return (
        <Badge colorScheme="pink" p="4" m="4" borderRadius='lg'>
            No Todos!!!
        </Badge>
    )
}


  return (
    <VStack 
    divider={<StackDivider />} 
    borderColor="pink.500" 
    borderWidth="2px"
    p="4"
    borderRadius="lg"
    width="100%"
    maxW={{base: '90vw', sm:'80vw',lg:'50vw', xl:'40vw' }}
    alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton 
          icon={<FaTrash />} 
          isRound='true' 
          onClick={() => deleteTodo(todo.id)} />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
