import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from "./Conta";

describe('Componente de conta', ()=>{
    it('Exibir o saldo da conta com a formatação monetária', ()=>{
        render(<Conta saldo={1000}/>)
        const saldo = screen.getByTestId('saldo-conta');
        // const saldo = screen.getByText('Saldo:');

        expect(saldo.textContent).toBe('R$ 1000');
    });
    it('Chama a função de realizar transação, quando o botão é clickado', ()=>{
        const funcaoRealizarTransacao = jest.fn(); // É uma função que não faz nada, porém é possivel ver se ela foi chamada
        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>);
        const botaoTransacao = screen.getByText('Realizar operação');

        fireEvent.click(botaoTransacao);
        expect(funcaoRealizarTransacao).toHaveBeenCalled();
    });
})