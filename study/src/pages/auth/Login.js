import {Button, Container, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const Login = () => {
  const schema = yup.object().shape({
    loginId: yup.string().required('아이디를 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onsubmit = () => {
    console.log('now login...')
    // 연결
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
            placeholder="아이디를 입력해주세요"
            invalid={ errors.loginId && true }
            { ...register('loginId') }
          />
          { errors.loginId && <FormFeedback>{ errors.loginId.message.toString() }</FormFeedback> }
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            autoComplete="off"
            invalid={ errors.loginId && true }
            { ...register('password') }
          />
          { errors.password && <FormFeedback>{ errors.password.message.toString() }</FormFeedback> }
        </FormGroup>
        <Button type={'submit'} color={'primary'} >Login</Button>
      </Form>
    </Container>
  )
}

export default Login