import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'
import { useState } from "react";

const Container = styled(Box)`
    display:flex;
    flex-grow:1;
    flex-basic :0;
    flex-direction: column;
    padding: 0 8px 8px;
`
    
const Heading = styled(Box)`
    background: #1d1e22;  
    display: flex;
    padding: 9px 12px;  
`;

const Header = styled(Box)`
    background: #060606;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-weight: 700;
`

export default function Editor(props) {

  const handleChange = (editor, data, value) => {
    props.onChange(value);
  }
  const [open, setOpen] = useState(true)

  return(
  <Container style={open? null : {flexGrow:0} }>
    <Header>
      <Heading>
        <Box 
            component="span"
            style={{
                background: props.color,
                height:20,
                width:20,
                display: "flex",
                placeContent:'center',
                borderRadius:5,
                marginRight:5,
                paddingBottom:5
            }}
        >{props.icon}</Box>
        {props.heading}
      </Heading>
      <CloseFullscreenIcon 
      fontSize="small"
      style={{alignSelf : 'center'}}
        onClick={() => setOpen(prevState => !prevState)}
      />
    </Header>
    <ControlledEditor 
      className="controlled-editor"
      value={props.value}
      onBeforeChange={handleChange}
      options={{
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }}
    />
  </Container>
  )
}