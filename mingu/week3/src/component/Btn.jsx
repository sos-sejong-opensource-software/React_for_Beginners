import styled from 'styled-components';

export default function Btn(props) {

    return (
        <ButtonBtn onClick={props.onClick}>{props.title}</ButtonBtn>
    )
}

const ButtonBtn = styled.button`
    color: #dee2e6;
    background-color: #212529;
    font-size: 15px;
    border: 1px solid #6c757d;
    border-radius: 5px;
    height:50px;
`