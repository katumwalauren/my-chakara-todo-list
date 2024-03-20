import { useState } from "react";
import { HStack, Button, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";


function AddTodo({ addTodo }) {

    const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault(); 
    if(!content) {
        toast({
            title: 'No content.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        return
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent('')
  }
  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Chakraui with todo app"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="blue" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;

