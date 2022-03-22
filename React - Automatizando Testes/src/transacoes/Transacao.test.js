import React from 'react';
import { render } from '@testing-library/react';
import Transacao from "./Transacao";

// Na primeira vez rodando a snapshot, ele cria uma pasta e avisa isso no terminal
// Usa a snapshot como base para compara se alguma modificação está no esquema que ele espera
// Caso apague a data do componente, por exemplo, ele dá erro
// Apertando U ele atualiza o snapshot
// Importante commitar o json da snapshot
describe('Componente de transação do estrato', ()=>{
    it('O snapshot do componente deve permanecer sempre o mesmo', ()=>{
        const {container} = render(<Transacao
            data="08/09/2020"
            tipo="saque"
            valor="20.00"
        />)

        expect(container.firstChild).toMatchSnapshot(); // Precisa ser igual ao snapshot que ele gerou
    })
})