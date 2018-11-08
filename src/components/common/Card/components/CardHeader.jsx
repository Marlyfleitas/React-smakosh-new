import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'Common'

const CardHeader = ({ title }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper theme={theme}>
				<h3>{title}</h3>
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)

const Wrapper = styled.div`
    padding: 1rem;

    h3 {
        font-size: .9em;
        margin: 0;
        font-weight: normal;
        color: #212121;

        ${({ theme }) => theme === 'dark' && `
            color: #fff;
        `}

        @media (max-width: 680px) {
            font-size: 1.2em;
        }
    }
`

export default CardHeader
