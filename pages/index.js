import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Container,
  Box,
  Input,
  Button,
  Text, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'
import { Logo } from './../components'
import firebase from './../config/firebase'


const validationSchema = yup.object().shape({
  email: yup.string().email('Email invalido').required('Preenchimento Obrigatório'),
  password: yup.string().required('Preenchimento Obrigatório'),
  username: yup.string().required('Preenchimento Obrigatório'),

})
export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    onSubmit: (values, form) => {
      console.log(values)
    },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: '',
    }
  })
  return (
    <div>
      <Container p={4} centerContent>
        <Logo />
        <Box p={4} mt={8}>
          <Text>Crie sua Agenda compartilhada</Text>
        </Box>
        <Box>
          <FormControl p={4} id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input size="lg" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
          </FormControl>
          <FormControl p={4} id="password" isRequired>
            <FormLabel>Senha</FormLabel>
            <Input size="lg" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
          </FormControl>
          <FormControl id="username" p={4} isRequired>
            <InputGroup size="lg">
              <InputLeftAddon children="Cloker.work/" />
              <Input type="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
            </InputGroup>
            {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
          </FormControl>

          <Box p={4}>
            <Button colorScheme="blue" width="100%" onClick={handleSubmit} isLoading={isSubmitting}>Entrar</Button>
          </Box>
        </Box>
      </Container>
    </div >
  )
}
