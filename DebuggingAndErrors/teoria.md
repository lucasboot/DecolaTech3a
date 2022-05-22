### Tipos de erro
- ECMAScript Error
Erros que acontecem em tempo de execução
Mensagem/Nome/Linha/CallStack

- DOMException
Erros relacionados ao Document Object Model (DOM)


### Tratamento
- Throw
Indica o envio de um erro, não string

### Try - catch - finally

### Objeto Error
new Error(message, fileName, lineNumber) - todos sao opcionais

#### Alterando nome do erro:
const MeuErro = new Error('Mensagem inválida'));
MeuErro.name = 'InvalidMessage';
throw MeuErro;