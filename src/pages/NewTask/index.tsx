import React from 'react';



import {
  Container,
  TopSide,
  BoxInfos,
  ButtonBack,
  IconBack,
  Box,
  ButtonSave,
  IconArrowRight,
  IconPencil,
  IconDocument,
  IconCalendar,
  IconCall,
  Form
} from './styles';

import { Link } from 'react-router-dom';
import { TodoContext } from '../../context/todoContext';

const NewTask: React.FC = () => {

    const {saveTodo } = React.useContext(TodoContext) as ContextType
    const [formData, setFormData] = React.useState<ITodo | {} > ()

    const handleForm = (event: React.FormEvent<HTMLInputElement>): void => {
      setFormData({
        ...formData,
        [event.currentTarget.id]: event.currentTarget.value,
      })
    }

    const handleSave = (event: React.FormEvent, formData: ITodo | any) => {
      event.preventDefault()
      saveTodo(formData)
      console.log("Deu certo")
    }

  return (

    <Container>
      <TopSide>
        <BoxInfos>
          <Link to={"/"}>
            <ButtonBack>
              <IconBack />
            </ButtonBack>
          </Link>

          <Box>
            <h1>Nova Tarefa</h1>
            <Link style={{ textDecoration: 'none', color: 'var(--gray-text)' }} to={"/"}>Home</Link>
            <IconArrowRight />
            <span>Nova tarefa</span>
          </Box>

        </BoxInfos>
        <ButtonSave onClick={(event) => handleSave(event, formData)}>Salvar</ButtonSave>

      </TopSide>


      {/* FORMULARIO */}

      <Form>
      <form >
        <div>
        
          <span> <IconPencil/> Nome</span>
         
          
          <input onChange={handleForm}/>
         
          <span> <IconCall/> Tipo</span>
          <input />
          </div>
         
         <div>
          <span><IconDocument/> Descrição</span>
          
          <input onChange={handleForm}/>
          
          <span><IconCalendar/> Data</span>
          
          <input />
          </div>
      

      </form>
      </Form>
    </Container>
  );
}

export default NewTask;