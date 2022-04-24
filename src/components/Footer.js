import React, { useCallback,useState , useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillGithub, AiOutlineGoogle} from 'react-icons/ai'
import { SiBloglovin } from 'react-icons/si'
import ReactTooltip from 'react-tooltip';



const Footer = () =>  {

    const [isMounted,setIsMounted] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
    },[]);
  return (
    <>
        <div style={{borderTop: "0.5px solid #eee" ,  marginTop: '50px'}}/>
        <Container style={{height: "100px", maxWidth: '250px'}}>
            <Row>
                <Col>
                    <br />
                    &nbsp;&nbsp;&nbsp;
                    <a target="_blank" data-for="enrich" data-tip>
                         <button  style={{ backgroundColor: "white", border: 0}}>
                             <AiOutlineGoogle size={40} />
                        </button>
                    </a>
                    {
                        isMounted && 
                            <ReactTooltip
                            style={{backgroundColor: 'black', color: 'white'}}
                            effect='solid'
                            id="enrich"
                            getContent={() => "wlsdiqkdrk@gmail.com"}
                    />
                    }
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a target="_blank" href='https://github.com/coorr' style={{backgroundColor: "white", border: 0}}>
                        <AiFillGithub size={40} />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a target="_blank" href='https://coor.tistory.com/' style={{backgroundColor: "white", border: 0}}>
                        <SiBloglovin size={40} />
                    </a>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer