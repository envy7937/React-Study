import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap'
import {useForm} from 'react-hook-form'

const Login = () => {

  const {
    register,
    handleSubmit
  } = useForm()

  const onsubmit = () => {
    console.log('now login...')
  }

  return (
    <Container>
      <h2>로그인</h2>
      <Form className="form" onSubmit={handleSubmit(onsubmit)}>
        <FormGroup>
          <Label for="loginId">ID</Label>
          <Input
            type="text"
            name="email"
            id="loginId"
            placeholder="ID를 입력해주세요"
            {...register('loginId', {required: "아이디를 입력해주세요."})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </FormGroup>
        <Button type={'submit'} color={'primary'} >Submit</Button>
      </Form>
    </Container>
  )
}

export default Login