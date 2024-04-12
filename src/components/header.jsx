import { Padding } from '@mui/icons-material'
import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
    background : #060606;
  paddingBottom: 8px;
`

export default function Header(){
    return (
        <Container position='static'>
            <Toolbar>
                <h2>Codrobe - Dress Your Code</h2>
            </Toolbar>
        </Container>
    )
}