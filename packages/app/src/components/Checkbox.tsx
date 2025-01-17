import { FC, memo } from 'react'
import styled from 'styled-components'

import { Body } from 'components/Text'

type CheckboxProps = {
	id: string
	label: string
	checked: boolean
	checkSide?: 'left' | 'right'
	onChange: () => void
}

export const Checkbox: FC<CheckboxProps> = memo(
	({ id, label, checked, onChange, checkSide = 'left', ...props }) => (
		<CheckboxContainer>
			{checkSide === 'left' && (
				<Input type="checkbox" id={id} name={id} checked={checked} onChange={onChange} {...props} />
			)}
			<Label htmlFor={id}>{<Body color="secondary">{label}</Body>}</Label>
			{checkSide === 'right' && (
				<Input type="checkbox" id={id} name={id} checked={checked} onChange={onChange} {...props} />
			)}
		</CheckboxContainer>
	)
)

const CheckboxContainer = styled.div`
	color: ${(props) => props.theme.colors.selectedTheme.gray};
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	gap: 8px;
`

const Input = styled.input`
	-webkit-appearance: none;
	-moz-appearance: none;
	-o-appearance: none;
	appearance: none;

	background-color: var(--form-background);
	margin: 0;

	font: inherit;
	color: currentColor;
	width: 22px;
	height: 22px;
	border: 1px solid ${(props) => props.theme.colors.selectedTheme.newTheme.checkBox.border};
	border-radius: 3px;
	transform: translateY(-0.075em);

	display: grid;
	place-content: center;
	cursor: pointer;

	&::before {
		content: '';
		width: 0.9em;
		height: 0.9em;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
		transform: scale(0);
		transform-origin: bottom left;
		transition: 100ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--form-control-color);
		background-color: ${(props) => props.theme.colors.selectedTheme.newTheme.text.primary};
	}
	&:checked::before {
		transform: scale(1);
	}
`

const Label = styled.label`
	cursor: pointer;
`
