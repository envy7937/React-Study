import './theme.scss'
import {Container, Form, FormGroup, Input, Label} from 'reactstrap'
import Swipe from 'bootstrap/js/src/util/swipe'
import {Moon, Sun} from 'react-feather'

const Theme = () => {
  return (
    <div>
      <div className={'d-flex justify-content-end'}>
        <Form>
          <FormGroup switch>
            <Input type="switch" role="switch" />
            <Moon size={16} /><Sun/>
          </FormGroup>
        </Form>
      </div>
      <Container>
        <h1>test</h1>
      </Container>
    </div>
  )
}

export default Theme