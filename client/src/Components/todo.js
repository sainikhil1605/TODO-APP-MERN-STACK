import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Nav = styled.div`
  width:100%;
  height:10%;
  background-color:white;
  box-shadow: 0px 20px 20px -6px rgba(0,0,0,.5);
`
const H1 = styled.h1`
margin:0px;
color:black;
padding:10px;
`
const Container = styled.div`
    display:flex;
    position: absolute;
    box-shadow: 8px 8px 8px 8px rgba(0,0,0,.5);
    min-height:80%;
    background-color: white;
    /* left:10%;
    right:10%;
    overflow-y: auto;
    top:auto;
    bottom:auto; */
    margin:50px 50px;
    width:inherit;
    right:50px;
    left:50px;
`
const TodoList = styled.div`
    flex:1;
    height:inherit;
    border-right:2px solid grey;
`
const TodoInsert = styled.div`
    flex:1;
    height: inherit;
`
const Heading = styled.div`
    font-weight:bold;
 @media (max-width:760px){
     font-size: 10px;
 }
 @media(min-width:760px){
     font-size:30px;
 }
`
const Textarea = styled.textarea`
    width:50%;
    height: auto;
    box-sizing:border-box;
    margin-bottom: 20px;
    @media(max-width:760px){
        width:100%;
    }
`
const InsertDiv = styled.div`
    display:block;
    align-content: center;
    position:relative;
    margin-top: 20px;
`
const InsertButton = styled.button`
    position: absolute; 
    display: inherit;
    background-color:black ;
    color:white;
    border:3px solid black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    @media(min-width:760px){
        width:80px;
        font-size:15px;
        padding:10px 15px;
        left:45%;
    }
    @media(max-width:760px){
        width:40px;
        font-size:10px;
        padding:5px;
        left:25%;
    }
`

const Td = styled.td`
width:10px;
height: 70px;
`
function Todo() {
    useEffect(() => {
        axios.get("http://localhost:4000").then((res) => {
            console.log(res.data);
            setTodo(res.data)
        });
    }, [])
    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState("");
    function handlSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:4000/", { todo: value }).then((res) => {
            alert(res.data);
            window.location.reload(false);
            setValue();
        })
    }
    function handleDelete(id) {
        console.log(id);
        axios.delete(`http://localhost:4000/${id}`).then((res) => {
            console.log(res);
        });
    }
    return (
        <div style={{ height: "100vh" }}>
            <Nav>
                <H1>To Do App</H1>
            </Nav>
            <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "100vh", height: "100%", position: "relative" }}>
                <Container>
                    <TodoList>
                        <Heading>This is List</Heading>
                        <table>
                            <thead>
                                <th>S.No</th>
                                <th>To Do</th>
                            </thead>
                            <tbody>
                                {todo.map((to) => {
                                    return (
                                        <tr>
                                            <Td>{(to.todo_id) + 1}</Td>
                                            <Td>{to.todo}</Td>
                                            <Td ><InsertButton style={{ left: "10%" }} id={to.todo_id} onClick={(e) => handleDelete(e.target.id)}>Delete</InsertButton></Td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </TodoList>
                    <TodoInsert>
                        <Heading>Type your tasks</Heading>
                        <InsertDiv>
                            <Textarea onChange={(e) => { setValue(e.target.value) }}></Textarea>
                            <InsertButton onClick={(e) => handlSubmit(e)}>Submit</InsertButton>
                        </InsertDiv>
                    </TodoInsert>
                </Container>
            </div>
        </div >
    )
}
export default Todo;