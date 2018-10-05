import styled from 'styled-components'

export const FooterContainer = styled.footer`
	margin-top: 6rem;
	${({ theme }) => theme === 'dark' && `
        background: #212121;
    `}
`

export const FullContainer = styled.div`
	width: 100%;
	padding: 8rem 0 2rem 0;
	color: #fff;
	background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
`

export const List = styled.ul`
	list-style: none;
	align-self: center;
	a {
		color: #fff;
	}
`

export const Brand = styled.div`
	display: flex;
	align-items: center;
`

export const StyledLogo = styled.div`
	transition: 0.5s;
	height: 4rem;
	width: 4rem;
	margin-right: 1rem;
	margin-bottom: 0;
	&:hover  {
		opacity: 0.7;
		transition: 0.5s;
		transform: rotate(360deg);
	}
`

export const Social = styled.a`
	margin-right: 1rem;
	${({ last }) => last && `
		margin-right: unset;
	`}
`

export const Grow = styled.div`
	cursor: pointer;
	transition: all .2s ease-in-out;
	&:hover  {
		transform: scale(1.1);
		transition: all .2s ease-in-out;
	}
`
